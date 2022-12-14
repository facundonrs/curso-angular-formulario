import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Alumno } from 'src/app/models/alumno';
import { ISession } from 'src/app/models/session';
import { IUsuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    private base_url = environment.base_url;

    private _session: ISession = {
        sessionActiva: false,
        //admin: false
    };

    constructor(
        private http: HttpClient
    ) { }

    get session(): ISession {
        return this._session
    }

    set session(session: ISession) {
        this._session = session
    }


    public login(username: string, password: string){

        // const data = { username, password };
        // const url = `${environment.base_url}usuarios?password=${password}&username=${username}`;

        // return this.http.get<IUsuario[]>(url);

        return this.http.get<Alumno[]>(`${this.base_url}alumnos`).pipe(
            map((usuarios: Alumno[]) => {
                return usuarios.filter((u: Alumno) => u.username == username && u.password == password)[0]
        }));
    }

    // public obtenerSesion(): Observable<Sesion>{
    //     return this.sesionSubject.asObservable();
    // }
}
