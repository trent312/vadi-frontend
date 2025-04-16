import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Solicitud } from "./solicitud.model";
import axios, { AxiosRequestConfig } from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root",
})
export class SolicitudService {
    private apiUrl = 'http://localhost:5044/solicitud';

    constructor(private http: HttpClient) {}

    public loadSolicitudes(): Observable<Solicitud[]>  {
        return this.http.get<Solicitud[]>(this.apiUrl);
    }

    public deleteSolicitud(id: number): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/delete?id=${id}`, null);
    }

    public insertSolicitud(solicitud: Solicitud): Observable<void> {
        console.log(solicitud);
        const body = {
            FechaSolicitud: solicitud.fechaSolicitud,
            Solicitante: solicitud.solicitante,
            IdEstado: solicitud.idEstado
        }
        return this.http.post<void>(`${this.apiUrl}/insert`, body);
    }
}