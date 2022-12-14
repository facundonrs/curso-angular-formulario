import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as InscripcionesActions from './inscripciones.actions';
import { InscripcionesService } from '../services/inscripciones.service';
import { IInscripcion } from 'src/app/models/inscripcion';
import { Router } from '@angular/router';

@Injectable()
export class InscripcionesEffects {
  cargarInscripciones$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(InscripcionesActions.cargarInscripciones),
      concatMap(() => this.inscripciones.obtenerInscripciones().pipe(
        map((i: IInscripcion[]) => InscripcionesActions.inscripcionesCargadas({inscripciones: i}))
      ))
    );
  });

  eliminarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.eliminarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.eliminarInscripcion(inscripcion).pipe(
        map((i: IInscripcion) => InscripcionesActions.cargarInscripciones())
      ))
    );
  });

  agregarInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionesActions.agregarInscripcion),
      concatMap(({ inscripcion }) => this.inscripciones.agregarInscripcion(inscripcion).pipe(
        map((i: IInscripcion) => InscripcionesActions.cargarInscripciones()),
        tap(() => this.router.navigate(['inicio']))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private inscripciones: InscripcionesService,
    private router: Router
    ) {}
}
