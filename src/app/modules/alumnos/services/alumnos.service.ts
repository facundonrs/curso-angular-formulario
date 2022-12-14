import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Datos } from '../../../data/datos';
import { Alumno } from '../../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

    //private alumnos: Alumno[] = Datos.alumnos;
    //private alumnosSubject: BehaviorSubject<Alumno[]>;
    private base_url: string = environment.base_url;
  
    constructor(
        private http: HttpClient
    ) { 
        //this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
    }


    public obtenerAlumnos(): Observable<Alumno[]>{
        return this.http.get<Alumno[]>(`${this.base_url}alumnos`);
    }

    public obtenerAlumno(id: number): Observable<Alumno>{
        return this.http.get<Alumno>(`${this.base_url}alumnos/${id}`);
    }

    public agregarAlumno(alumno: Alumno){
        return this.http.post<Alumno>(`${this.base_url}alumnos/`, alumno);
        // this.alumnos.push(alumno);
        // this.alumnosSubject.next(this.alumnos);
    }

    public editarAlumno(alumno: Alumno){
        return this.http.put<Alumno>(`${this.base_url}alumnos/${alumno.id}`, alumno).pipe(
            catchError(this.handlerError)
        );
    }

    public eliminarAlumno(alumno: Alumno){
        return this.http.delete<Alumno>(`${this.base_url}/alumnos/${alumno.id}`).pipe(
            catchError(this.handlerError)
        );
        // let indice = this.alumnos.findIndex((item: Alumno) => item.id === id);
    
        // if(indice > -1){
        //   this.alumnos.splice(indice, 1);
        // }
    
        // this.alumnosSubject.next(this.alumnos);
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
