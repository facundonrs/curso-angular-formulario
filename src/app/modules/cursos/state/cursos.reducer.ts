import { Action, createReducer, on } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import * as CursosActions from './cursos.actions';

export const cursosFeatureKey = 'cursos';

export interface CursoState {
    cargando: boolean;
    cursos: Curso[];
}

export const initialState: CursoState = {
    cargando: false,
    cursos: []
};


export const reducer = createReducer(
    initialState,
    on(CursosActions.cargarCursos, (state) => {
      return {...state, cargando: true}
    }),
    on(CursosActions.cursosCargados, (state, {cursos}) => {
      return {...state, cargando: false, cursos: cursos}
    }),
    on(CursosActions.agregarCurso, (state, {curso}) => {
      return state
    }),
    on(CursosActions.editarCurso, (state, {curso}) => {
      return state
    }),
    on(CursosActions.eliminarCurso, (state, {curso}) => {
      return state
    }),
  );

