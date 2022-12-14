import { Injectable } from '@angular/core';
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
export class AutenticacionGuard implements CanActivate {
    constructor(
        private session: SessionService,
        private router: Router,
        private store: Store<SessionState>
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.store.select(selectSessionActiva).pipe(
            map( (session: ISession) => {
                if(session.usuarioActivo) {
                    return true;
                }else{
                    this.router.navigate(['autenticacion/login']);
                    return false;
                }
            })
        ) 
    }

    canLoad(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.store.select(selectSessionActiva).pipe(
            map( (session: ISession) => {
                if(session.usuarioActivo) {
                    return true;
                }else{
                    this.router.navigate(['autenticacion/login']);
                    return false;
                }
            })
        ) 
    }

    // canActivateChild(
    //     childRoute: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //       return this.store.select(selectSessionActiva).pipe(
    //         map((sesion: ISession) => {
    //           if(sesion.usuarioActivo){
    //             return true;
    //         //   }else if(childRoute.routeConfig?.path == 'listar'){
    //         //     return true;
    //           }else{            
    //             alert("No tiene permisos para acceder a este sitio");
    //             this.router.navigate(['inicio']);
    //             return false;
    //           }
    //         })
    //       );
    //   }

}
