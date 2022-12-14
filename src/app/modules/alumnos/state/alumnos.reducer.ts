import { Action, createReducer, on } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import * as AlumnosActions from './alumnos.actions';

export const alumnosFeatureKey = 'alumnos';

export interface AlumnoState {
    cargando: boolean;
    alumnos: Alumno[]
}

export const initialState: AlumnoState = {
    cargando: false,
    alumnos: []
};


export const reducer = createReducer(
    initialState,
    on(AlumnosActions.cargarAlumnos, (state) => {
      return {...state, cargando: true}
    }),
    on(AlumnosActions.alumnosCargados, (state, {alumnos}) => {
      return {...state, cargando: false, alumnos: alumnos}
    }),
    on(AlumnosActions.agregarAlumno, (state, {alumno}) => {
      return state
    }),
    on(AlumnosActions.editarAlumno, (state, {alumno}) => {
      return state
    }),
    on(AlumnosActions.eliminarAlumno, (state, {alumno}) => {
      return state
    }),
  );


