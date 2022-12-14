import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursos from './cursos.reducer';

export const selectCursosState = createFeatureSelector<fromCursos.CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCursosCargando = createSelector(
    selectCursosState,
    (state) => state.cargando
);

export const selectCursos = createSelector(
    selectCursosState,
    (state) => state.cursos
)