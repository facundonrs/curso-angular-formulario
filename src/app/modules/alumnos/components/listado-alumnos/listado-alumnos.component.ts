import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/modules/alumnos/services/alumnos.service';
import { cargarAlumnos, eliminarAlumno } from '../../state/alumnos.actions';
import { AlumnoState } from '../../state/alumnos.reducer';
import { selectAlumnos, selectAlumnosCargando } from '../../state/alumnos.selectors';

@Component({
    selector: 'app-listado-alumnos',
    templateUrl: './listado-alumnos.component.html',
    styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit, OnDestroy {

    // public cursos$!: Observable<Curso[]>;
    public cargandoAlumnos$!: Observable<boolean>;
    public dataSource!: MatTableDataSource<Alumno>;
    public alumnos: Alumno[] = []; //cambio esta linea para que el array de alumnos venga desde un observable
    public alumnosSubscription!: Subscription;
    public columnas: string[] = ['nombreCompleto', 'fechaNacimiento', 'email', 'acciones'];
    //public dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>();

    constructor(
        private storeAlumnos: Store<AlumnoState>,
        private alumnosService: AlumnosService,
        private router: Router
    ) {
        this.storeAlumnos.dispatch(cargarAlumnos());
    }

    ngOnInit(): void {
        this.storeAlumnos.select(selectAlumnos).subscribe((alumnos: Alumno[]) => {
            this.dataSource =  new MatTableDataSource(alumnos);
        });
        this.cargandoAlumnos$ = this.storeAlumnos.select(selectAlumnosCargando);
    }

    public filtrar(event: Event) {
        const valor = (event.target as HTMLInputElement).value;

        this.dataSource.filter = valor.trim().toLocaleLowerCase();
    }

    editarAlumno(alumno: Alumno) {
        this.router.navigate(['alumnos/editar', alumno]);
    }

    eliminarAlumno(alumno: Alumno) {
        this.storeAlumnos.dispatch(eliminarAlumno({alumno}));
    }

    ngOnDestroy(): void {
        //this.alumnosSubscription.unsubscribe();
    }
}
