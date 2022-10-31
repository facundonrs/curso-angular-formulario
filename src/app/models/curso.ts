export interface Curso {
    id: number;
    nombre: string;
    descripcion: string;
    fecha_desde: Date;
    fecha_hasta: Date;
    cant_max_alumnos?: number;
}