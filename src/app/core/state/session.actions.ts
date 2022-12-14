import { createAction, props } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';
import { IUsuario } from 'src/app/models/usuario';

export const cargarSession = createAction(
  '[Session] Cargar Sessions'
);

export const cargarSessionActiva = createAction(
    '[Session] Load Session Activa',
    props<{ usuarioActivo: Alumno }>()
)

export const loginSession = createAction(
    '[Session] Login Session',
    props<{ usuario: Alumno }>()
)

export const logoutSession = createAction(
    '[Session] Logout Session',
    props<{ usuario: Alumno }>()
)