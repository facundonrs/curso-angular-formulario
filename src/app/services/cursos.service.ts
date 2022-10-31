import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Datos } from '../data/datos';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

    public cursos: Curso[] = Datos.cursos; 
    private cursosSubject: BehaviorSubject<Curso[]>;

    constructor() { 
        this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
    }

    public async obtenerCursosComoPromise(): Promise<Curso[]>{
        const promesa = new Promise<Curso[]>( (resolve, reject) => {
            resolve(this.cursos);
        })

        return promesa;
    }

    obtenerCursos(): Observable<Curso[]>{
        return of(this.cursos); //devuelvo el array de cursos como observable 
    }

    agregarCurso(curso: Curso){
        this.cursos.push(curso);
        this.cursosSubject.next(this.cursos);
    }

    editarCurso(curso: Curso){
        let indice = this.cursos.findIndex((item: Curso) => item.id === curso.id);

        console.log('edit service', curso);

        if(indice > -1){
        this.cursos[indice] = curso;
        }

        this.cursosSubject.next(this.cursos);
    }

    eliminarCurso(id: number){
        console.log(this.cursos);
        let indice = this.cursos.findIndex((item: Curso) => item.id === id);

        if(indice > -1){
        this.cursos.splice(indice, 1);
        }

        this.cursosSubject.next(this.cursos);
    }
}
