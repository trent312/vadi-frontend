import { createAction, props } from '@ngrx/store';
import { Solicitud } from '../../../../api/solicitud.model';

export const loadSolicitudes = createAction('[Solicitud] Load Solicitudes');

export const loadSolicitudesSuccess = createAction(
  '[Solicitud] Load Solicitudes Success',
  props<{ solicitudes: Solicitud[] }>()
);

export const deleteSolicitud = createAction('[Solicitud] Delete Solicitud',  props<{ id: number }>());

export const deleteSolicitudSuccess = createAction(
  '[Solicitud] Delete Solicitud Success',
  props<{ id: number }>()
);

export const insertSolicitud = createAction('[Solicitud] Insert Solicitud',  props<{solicitud: Solicitud}>());

export const insertSolicitudSuccess = createAction(
  '[Solicitud] Insert Solicitud Success',
  props<{ solicitud: Solicitud }>()
);
