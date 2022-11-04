import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ISession } from 'src/app/models/session';
import { IUsuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

    private base_url = environment.base_url;

    private _session: ISession = {
        sesionActiva: false
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

        const data = { username, password };
        const url = `${environment.base_url}usuarios?password=${password}&username=${username}`;

        return this.http.get<IUsuario[]>(url);
        
    }
}
