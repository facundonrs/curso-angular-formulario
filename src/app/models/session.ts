import { Alumno } from "./alumno";
import { IUsuario } from "./usuario";

export interface ISession {
    sessionActiva: boolean;
    usuarioActivo?: Alumno;
    //admin: boolean;
}