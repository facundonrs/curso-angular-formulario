import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';
import * as CursosActions from './cursos.actions';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../services/cursos.service';
import { Router } from '@angular/router';


@Injectable()
export class CursosEffects {
    cargarCursos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.cargarCursos),
            concatMap(() => this.cursos.obtenerCursos().pipe(
                map((c: Curso[]) => CursosActions.cursosCargados({ cursos: c }))
            ))
        );
    });

    agregarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.agregarCurso),
            concatMap(({ curso }) => this.cursos.agregarCurso(curso).pipe(
                map((c: Curso) => CursosActions.cargarCursos())
            )),
            tap(() => this.router.navigate(['cursos']) )
        );
    });

    eliminarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.eliminarCurso),
            concatMap(({ curso }) => this.cursos.eliminarCurso(curso).pipe(
                map((c: Curso) => CursosActions.cargarCursos())
            ))
        );
    });

    editarCurso$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CursosActions.editarCurso),
            concatMap(({ curso }) => this.cursos.editarCurso(curso).pipe(
                map((c: Curso) => CursosActions.cargarCursos())
            )),
            tap(() => this.router.navigate(['cursos']) )
        );
    });

    constructor(
        private actions$: Actions,
        private cursos: CursosService,
        private router: Router
    ) { }

}
