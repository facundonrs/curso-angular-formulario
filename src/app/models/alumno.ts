export interface Alumno {
    id?: number;
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: Date;
    paisId: number;
    ciudadId: number;
    username: string;
    password: string;
    email: string;
    celular: string;
    domicilio: string;
    admin: boolean;
}