import { Action, createReducer, on } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { IUsuario } from 'src/app/models/usuario';
import * as SessionActions from './session.actions';

export const sessionFeatureKey = 'session';

export interface SessionState {
    cargando: boolean;
    sessionActiva: boolean;
    usuarios: Alumno[];
}

export const initialState: SessionState = {
    cargando: false,
    sessionActiva: false,
    usuarios: []
};


export const reducer = createReducer(
  initialState,

  //on(SessionActions.cargarSession, state => state),
  on(SessionActions.cargarSessionActiva, (state, {usuarioActivo}) => {
    return {...state, sessionActiva: true, usuarioActivo: usuarioActivo}
  }),
  on(SessionActions.loginSession, (state, {usuario}) => {
    return state
  }),
  on(SessionActions.logoutSession, (state, {usuario}) => {
    return {...state, sessionActiva: false, usuarioActivo: []}
  })

);

