import { createAction, props } from '@ngrx/store';
import { IInscripcion } from 'src/app/models/inscripcion';

export const cargarInscripciones = createAction(
  '[Inscripciones] Cargar Inscripciones'
);

export const inscripcionesCargadas = createAction(
    '[Inscripciones] Inscripciones Cargadas',
    props<{ inscripciones: IInscripcion[]}>()
);

export const agregarInscripcion = createAction(
    '[Inscripciones] Agregar Inscripcion',
    props<{ inscripcion: IInscripcion}>()
);

export const editarInscripcion = createAction(
    '[Inscripciones] Editar Inscripcion',
    props<{ inscripcion: IInscripcion}>()
);

export const eliminarInscripcion = createAction(
    '[Inscripciones] Eliminar Inscripcion',
    props<{ inscripcion: IInscripcion}>()
);



