import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Datos } from '../data/datos';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

    private alumnos: Alumno[] = Datos.alumnos;
  
    constructor(

    ) { }
  
    obtenerAlumnos(): Observable<Alumno[]>{
        return of(this.alumnos); //devuelvo el array de alumnos como observable 
    }
}
