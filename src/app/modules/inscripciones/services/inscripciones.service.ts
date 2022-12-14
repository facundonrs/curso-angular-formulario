import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IInscripcion } from 'src/app/models/inscripcion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

    private base_url: string = environment.base_url;
  
    constructor(
        private http: HttpClient
    ) { }

    public obtenerInscripciones(): Observable<IInscripcion[]>{
        return this.http.get<IInscripcion[]>(`${this.base_url}inscripciones`);
    }

    public obtenerInscripcion(id: number): Observable<IInscripcion>{
        return this.http.get<IInscripcion>(`${this.base_url}inscripciones/${id}`);
    }
    
    public agregarInscripcion(incripcion: IInscripcion){
        return this.http.post<IInscripcion>(`${this.base_url}inscripciones/`, incripcion);
    }

    public editarInscripciones(incripcion: IInscripcion){
        return this.http.put<IInscripcion>(`${this.base_url}inscripciones/${incripcion.id}`, incripcion).pipe(
            catchError(this.handlerError)
        );
    }

    public eliminarInscripcion(inscripcion: IInscripcion){
        return this.http.delete<IInscripcion>(`${this.base_url}inscripciones/${inscripcion.id}`).pipe(
            catchError(this.handlerError)
        );
    }

    public handlerError(error: HttpErrorResponse){      
        return throwError(() => new Error('Error en la comunicacion HTTP'));
    }
}
