import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';
import * as SessionActions from './session.actions';
import { IUsuario } from 'src/app/models/usuario';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class SessionEffects {
    loginSession$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SessionActions.loginSession),
            concatMap(({ usuario }) => this.session.login(usuario.username, usuario.password).pipe(
                tap(() => console.log ),
                map((u: Alumno) => SessionActions.cargarSessionActiva({ usuarioActivo: u }))
            )),
            tap((u: any) => {
                    (u.usuarioActivo) ? this.router.navigate(['inicio']) : this._snackBar.open('El usuario o la contraseña son incorrectos', 'Cerrar') 
                }
            )
        );
    });

    constructor(
        private actions$: Actions,
        private session: SessionService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) { }

}
