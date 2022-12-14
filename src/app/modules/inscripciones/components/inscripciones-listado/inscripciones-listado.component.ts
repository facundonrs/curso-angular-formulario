import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SessionState } from 'src/app/core/state/session.reducer';
import { selectSessionActiva } from 'src/app/core/state/session.selectors';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { IInscripcion } from 'src/app/models/inscripcion';
import { ISession } from 'src/app/models/session';
import { IUsuario } from 'src/app/models/usuario';
import { cargarAlumnos } from 'src/app/modules/alumnos/state/alumnos.actions';
import { AlumnoState } from 'src/app/modules/alumnos/state/alumnos.reducer';
import { selectAlumnos } from 'src/app/modules/alumnos/state/alumnos.selectors';
import { cargarCursos } from 'src/app/modules/cursos/state/cursos.actions';
import { CursoState } from 'src/app/modules/cursos/state/cursos.reducer';
import { selectCursos } from 'src/app/modules/cursos/state/cursos.selectors';
import { agregarInscripcion, cargarInscripciones, eliminarInscripcion } from '../../state/inscripciones.actions';
import { InscripcionState } from '../../state/inscripciones.reducer';
import { selectInscripciones } from '../../state/inscripciones.selectors';

@Component({
    selector: 'app-inscripciones-listado',
    templateUrl: './inscripciones-listado.component.html',
    styleUrls: ['./inscripciones-listado.component.css']
})
export class InscripcionesListadoComponent implements OnInit {

    //public inscripciones$!: Observable<IInscripcion[]>;
    public dataSource!: MatTableDataSource<IInscripcion>;
    public columnas: string[] = ['id', 'alumno', 'curso', 'fecha_inscripcion', 'acciones'];

    public cursos: Curso[] = [];
    public inscripcion: IInscripcion[] = [];
    public inscripcionSubscription!: Subscription;
    //public dataSource: MatTableDataSource<IInscripcion> = new MatTableDataSource<IInscripcion>();

    public session!: ISession;
    public usuarioActivo!: IUsuario;
    public sessionSubscription!: Subscription;

    public alumnos$!: Observable<Alumno[]>
    public cursos$!: Observable<Curso[]>

    public cursoSeleccionado!: Curso;
    public alumnoSeleccionado!: Alumno;

    public cursoSeleccionadoError: boolean = false;
    public alumnoSeleccionadoError: boolean = false;

    constructor(
        private storeInscripciones: Store<InscripcionState>,
        private storeCursos: Store<CursoState>,
        private storeAlumnos: Store<AlumnoState>,
        private storeSession: Store<SessionState>,
    ) {
        this.storeInscripciones.dispatch(cargarInscripciones());
        this.storeAlumnos.dispatch(cargarAlumnos());
        this.storeCursos.dispatch(cargarCursos());
    }

    ngOnInit(): void {
        /*busco al usuario activo */
        this.sessionSubscription =
            this.storeSession.select(selectSessionActiva).subscribe((session: ISession) => {
                this.usuarioActivo = session.usuarioActivo!
            });

        this.storeInscripciones.select(selectInscripciones).subscribe((inscripciones: IInscripcion[]) => {

            /**Si es usuario comun solo devuelve sus inscripciones**/
            if (this.usuarioActivo && this.usuarioActivo.admin == false) {
                inscripciones = inscripciones.filter((item: IInscripcion) => item.alumno.id == this.usuarioActivo.id)
            }
            this.dataSource = new MatTableDataSource<IInscripcion>(inscripciones);

        });

        /** */
        this.alumnos$ = this.storeAlumnos.select(selectAlumnos);
        this.cursos$ = this.storeCursos.select(selectCursos);

    }

    public inscribir(){
        this.cursoSeleccionadoError = false;
        this.alumnoSeleccionadoError = false;

        if(this.alumnoSeleccionado && this.cursoSeleccionado){
            const inscripcion: IInscripcion = {
                alumno: this.alumnoSeleccionado,
                curso: this.cursoSeleccionado,
                fecha_inscripcion: new Date()
            }
            this.storeInscripciones.dispatch(agregarInscripcion({inscripcion}))


        }
        if(!this.alumnoSeleccionado){
            this.alumnoSeleccionadoError = true;
        }
        if(!this.cursoSeleccionado){
            this.cursoSeleccionadoError = true;
        }
    }

    public eliminarInscripcion(inscripcion: IInscripcion) {
        this.storeInscripciones.dispatch(eliminarInscripcion({ inscripcion }));
    }

    public onChangeAlumno(event: any){
        this.alumnoSeleccionado = event.value;
    }

    public onChangeCurso(event: any){
        this.cursoSeleccionado = event.value;
    }

    ngOnDestroy(): void {
        this.sessionSubscription.unsubscribe();
    }
}
