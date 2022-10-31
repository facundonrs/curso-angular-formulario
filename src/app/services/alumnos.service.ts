import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { Datos } from '../data/datos';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

    private alumnos: Alumno[] = Datos.alumnos;
    private alumnosSubject: BehaviorSubject<Alumno[]>;
  
    constructor(
    ) { 
        this.alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
    }
  
    obtenerAlumnos(): Observable<Alumno[]>{
        return of(this.alumnos); //devuelvo el array de alumnos como observable 
    }

    agregarAlumno(alumno: Alumno){
        this.alumnos.push(alumno);
        this.alumnosSubject.next(this.alumnos);
    }

    editarAlumno(alumno: Alumno){
        let indice = this.alumnos.findIndex((item: Alumno) => item.id === alumno.id);
    
        if(indice > -1){
          this.alumnos[indice] = alumno;
        }
    
        this.alumnosSubject.next(this.alumnos);
    }

    eliminarAlumno(id: number){
        console.log(this.alumnos);
        let indice = this.alumnos.findIndex((item: Alumno) => item.id === id);
    
        if(indice > -1){
          this.alumnos.splice(indice, 1);
        }
    
        this.alumnosSubject.next(this.alumnos);
      }
    
}
