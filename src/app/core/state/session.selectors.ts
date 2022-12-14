import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSession from './session.reducer';

export const selectSessionState = createFeatureSelector<fromSession.SessionState>(
  fromSession.sessionFeatureKey
);

export const selectSessionActiva = createSelector(
    selectSessionState,
    (state) => state
)

export const selectUsuarios = createSelector(
    selectSessionState,
    (state) => state.usuarios
)