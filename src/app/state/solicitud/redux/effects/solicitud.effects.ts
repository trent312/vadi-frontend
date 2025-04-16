import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { loadSolicitudes, loadSolicitudesSuccess, deleteSolicitud, deleteSolicitudSuccess, insertSolicitud, insertSolicitudSuccess } from '../actions/solicitud.actions';
import { SolicitudService } from 'src/app/api/solicitud.service';

@Injectable()
export class SolicitudEffects {
  loadSolicitudes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSolicitudes),
      switchMap(() => this.solicitudService$.loadSolicitudes().pipe(
        map((solicitudes) => loadSolicitudesSuccess({ solicitudes }))
      ))
    )
  );

  deleteSolicitud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteSolicitud),
      switchMap(({ id }) =>
        this.solicitudService$.deleteSolicitud(id).pipe(
          map(() => deleteSolicitudSuccess({ id }))
        )
      )
    )
  );

  insertSolicitud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(insertSolicitud),
      switchMap(({ solicitud }) => 
        this.solicitudService$.insertSolicitud(solicitud).pipe(
          map(() => insertSolicitudSuccess({ solicitud }))
        )
      )
    )
  )

  constructor(
    private solicitudService$: SolicitudService,
    private actions$: Actions,
  ) {}
}
