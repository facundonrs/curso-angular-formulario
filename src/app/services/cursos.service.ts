import { Injectable } from '@angular/core';
import { Datos } from '../data/datos';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[] = Datos.cursos; 
  constructor() { }

  public async obtenerCursosComoPromise(): Promise<Curso[]>{
    const promesa = new Promise<Curso[]>( (resolve, reject) => {
        resolve(this.cursos);
    })

    return promesa;
  }
}
