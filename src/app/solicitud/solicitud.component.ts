import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Solicitud } from '../api/solicitud.model';
import { insertSolicitud } from '../state/solicitud/redux/actions/solicitud.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
    solicitudForm!: FormGroup;

    constructor(private router: Router, private store: Store, private formBuilder: FormBuilder) {
      
    }
  
    ngOnInit() {
        this.solicitudForm = this.formBuilder.group({
            id: [0, Validators.required],
            fechaSolicitud: ['', Validators.required],
            solicitante: ['', Validators.required],
            idEstado: [0, Validators.required]
          });
    }

    private insertSolicitud(solicitud: Solicitud): void {
      this.store.dispatch(insertSolicitud({ solicitud }));
      alert('Se agregó satisfactoriamente la solicitud.');
      this.router.navigate(['/']);
    }

    submitForm(): void {
      console.log(this.solicitudForm.valid);
      if(this.solicitudForm.valid) {
        this.insertSolicitud(this.solicitudForm.value)
      }
    }
}