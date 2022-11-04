import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Datos } from '../../../data/datos';
import { Curso } from '../../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

    private base_url: string = environment.base_url;

    constructor(
        private http: HttpClient
    ) { 
    }

    obtenerCursos(): Observable<Curso[]>{
        return this.http.get<Curso[]>(`${this.base_url}cursos`);
    }

    agregarCurso(curso: Curso){
        return this.http.post<Curso>(`${this.base_url}cursos/`, curso);
    }

    public editarCurso(curso: Curso){
        return this.http.put<Curso>(`${this.base_url}cursos/${curso.id}`, curso).pipe(
            catchError(this.handlerError)
        );
    }

    eliminarCurso(id: number){
        return this.http.delete<Curso>(`${this.base_url}/cursos/${id}`).pipe(
            catchError(this.handlerError)
        );
    }

    public handlerError(error: HttpErrorResponse){
        // if(error.error instanceof ErrorEvent){
        //     console.warn('Error del lado del cliente', error.error.message);
        // }else{
        //     console.warn('Error del lado del servidor', error.error.message);
        // }
      
        return throwError(() => new Error('Error en la comunicacion HTTP'));
    }
}
