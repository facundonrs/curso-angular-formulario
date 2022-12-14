import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as AlumnosActions from './alumnos.actions';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno } from 'src/app/models/alumno';
import { Router } from '@angular/router';


@Injectable()
export class AlumnosEffects {


    cargarAlumnos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosActions.cargarAlumnos),
            concatMap(() => this.alumnos.obtenerAlumnos().pipe(
                map((a: Alumno[]) => AlumnosActions.alumnosCargados({ alumnos: a }))
            ))
        );
    });

    agregarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosActions.agregarAlumno),
            concatMap(({ alumno }) => this.alumnos.agregarAlumno(alumno).pipe(
                map((a: Alumno) => AlumnosActions.cargarAlumnos())
            )),
            tap(() => this.router.navigate(['alumnos']) )
        );
    });

    eliminarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosActions.eliminarAlumno),
            concatMap(({ alumno }) => this.alumnos.eliminarAlumno(alumno).pipe(
                map((a: Alumno) => AlumnosActions.cargarAlumnos())
            ))
        );
    });

    editarAlumno$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AlumnosActions.editarAlumno),
            concatMap(({ alumno }) => this.alumnos.editarAlumno(alumno).pipe(
                map((a: Alumno) => AlumnosActions.cargarAlumnos())
            )),
            tap(() => this.router.navigate(['alumnos']) )
        );
    });


    constructor(
        private actions$: Actions,
        private alumnos: AlumnosService,
        private router: Router) { }

}
