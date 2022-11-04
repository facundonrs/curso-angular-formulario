import { IUsuario } from "./usuario";

export interface ISession {
    sesionActiva: boolean;
    usuarioActivo?: IUsuario;
}