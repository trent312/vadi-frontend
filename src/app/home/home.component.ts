import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Solicitud } from '../api/solicitud.model';
import { selectAllSolicitudes } from '../state/solicitud/redux/solicitud.selectors';
import { loadSolicitudes, deleteSolicitud } from '../state/solicitud/redux/actions/solicitud.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    solicitudes$: Observable<Solicitud[]>;
    displayedColumns: string[] = ['id', 'fechaSolicitud', 'solicitante', 'idEstado', 'edit', 'delete'];

    constructor(private router: Router, private store: Store) {
      this.solicitudes$ = this.store.select(selectAllSolicitudes);
    }
  
    ngOnInit() {
      this.store.dispatch(loadSolicitudes());
    }

    updateSolicitud(id: number): void {
      this.router.navigate(['/solicitud', { id }]);
    }
    deleteSolicitud(id: number): void {
      this.store.dispatch(deleteSolicitud({ id }));
      alert('Se eliminó satisfactoriamente la solicitud.');
      window.location.reload();
    }
}