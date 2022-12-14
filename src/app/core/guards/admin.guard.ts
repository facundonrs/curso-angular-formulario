import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ISession } from 'src/app/models/session';
import { SessionService } from '../services/session.service';
import { SessionState } from '../state/session.reducer';
import { selectSessionActiva } from '../state/session.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private session: SessionService,
        private router: Router,
        private store: Store<SessionState>,
        private _snackBar: MatSnackBar
    ){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
//         if(this.session.session.admin){
//             return true;
//         }else{
//             this.router.navigate(['inicio']);
//             return false;
//         }

//   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectSessionActiva).pipe(
        map((sesion: ISession) => {
          if(sesion.usuarioActivo?.admin){
            return true;
          }else{
            this._snackBar.open('No tiene permisos para acceder a este sitio', 'Cerrar');
            this.router.navigate(['inicio']);
            return false;
          }
        })
      );
  }

//   canActivateChild(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
//         if(this.session.session.admin){
//             return true; 
//         }else{
//             this.router.navigate(['inicio']);
//             return false;
//         }

//   }

// la 2da opcion
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.store.select(selectSessionActiva).pipe(
            map((sesion: ISession) => {
              if(sesion.usuarioActivo?.admin){
                return true;
              }else{
                this._snackBar.open('No tiene permisos para acceder a este sitio', 'Cerrar');
                this.router.navigate(['inicio']);
                return false;
              }
            })
          );

  }
}
