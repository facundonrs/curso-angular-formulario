import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SessionState } from 'src/app/core/state/session.reducer';
import { selectSessionActiva } from 'src/app/core/state/session.selectors';
import { Curso } from 'src/app/models/curso';
import { IInscripcion } from 'src/app/models/inscripcion';
import { ISession } from 'src/app/models/session';
import { InscripcionesService } from 'src/app/modules/inscripciones/services/inscripciones.service';
import { agregarInscripcion } from 'src/app/modules/inscripciones/state/inscripciones.actions';
import { InscripcionState } from 'src/app/modules/inscripciones/state/inscripciones.reducer';
import { selectInscripciones } from 'src/app/modules/inscripciones/state/inscripciones.selectors';
import { agregarCurso, cargarCursos, eliminarCurso } from '../../state/cursos.actions';
import { CursoState } from '../../state/cursos.reducer';
import { selectCursos, selectCursosCargando } from '../../state/cursos.selectors';

@Component({
    selector: 'app-listado-cursos',
    templateUrl: './listado-cursos.component.html',
    styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {

    public cursos$!: Observable<Curso[]>;
    public cargandoCursos$!: Observable<boolean>;
    public cursos: Curso[] = [];
    public cursosYaInscripto: Curso[] = [];

    public session!: ISession;
    public sessionSubscription!: Subscription;

    constructor(
        private storeCursos: Store<CursoState>,
        private storeSession: Store<SessionState>,
        private storeInscripciones: Store<InscripcionState>,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {
        this.storeCursos.dispatch(cargarCursos());
    }

    ngOnInit(): void {
        this.storeCursos.select(selectCursos).subscribe((cursos: Curso[]) => {
            this.cursos = cursos;
        });
        this.cargandoCursos$ = this.storeCursos.select(selectCursosCargando);

        this.sessionSubscription =
            this.storeSession.select(selectSessionActiva).subscribe((session: ISession) => {
                this.session = session
            });
    }

    public editarCurso(curso: Curso) {
        this.router.navigate(['cursos/editar', curso]);
    }

    public eliminarCurso(curso: Curso) {
        this.storeCursos.dispatch(eliminarCurso({ curso }));
    }

    public inscribirmeACurso(curso: Curso) {

        this.cursosYaInscripto = [];

        /****BUSCO LAS INSCRIPCIONES DEL ALUMNO */
        this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: IInscripcion[]) => {
            
            if (this.session.usuarioActivo && this.session.usuarioActivo.admin == false) {
                inscripciones = inscripciones.filter((item: IInscripcion) => item.alumno.id == this.session.usuarioActivo?.id)
            }

            if(inscripciones){
                inscripciones.forEach( (i: IInscripcion) => this.cursosYaInscripto.push(i.curso) );
            }

            
        });

        const yaInscripto = this.cursosYaInscripto.find( (item) => item.id == curso.id);
            
        if(yaInscripto){
            this._snackBar.open('Ya estás inscripto a este curso', 'Cerrar');
        }else{
            const inscripcion: IInscripcion = {
                alumno: this.session.usuarioActivo!,
                curso: curso,
                fecha_inscripcion: new Date(),
            }
            this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}));
            this._snackBar.open('Inscripción generada!', 'Cerrar');
        }

    }

}
