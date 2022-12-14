import { createAction, props } from '@ngrx/store';
import { Alumno } from 'src/app/models/alumno';

export const cargarAlumnos = createAction(
    '[Alumnos] Cargar Alumnos'
);

export const alumnosCargados = createAction(
    '[Alumnos] Alumnos Cargados',
    props<{ alumnos: Alumno[] }>()
);

export const agregarAlumno = createAction(
    '[Alumnos] Agregar Alumno',
    props<{ alumno: Alumno }>()
);

export const editarAlumno = createAction(
    '[Alumnos] Editar Alumno',
    props<{ alumno: Alumno }>()
);

export const eliminarAlumno = createAction(
    '[Alumnos] Eliminar Alumno',
    props<{ alumno: Alumno }>()
);



