import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: Alumno): string {
    return `${alumno.apellido}, ${alumno.nombre}`;
  }

}
