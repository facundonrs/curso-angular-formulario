import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

    private base_url: string = environment.base_url_2;

    constructor(
        private http: HttpClient
    ) { 
    }

    public obtenerPaises(): Observable<IPais[]>{
        return this.http.get<IPais[]>(`${this.base_url}paises`);
    }

   
}
