import { Alumno } from "./alumno";
import { Curso } from "./curso";

export interface IInscripcion{
    id?: number;
    alumno: Alumno;
    curso: Curso;
    fecha_inscripcion: Date;
}