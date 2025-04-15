import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Solicitud } from "./solicitud.model";
import axios, { AxiosRequestConfig } from 'axios';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root",
})
export class SolicitudService {

    constructor(private http: HttpClient) {}

    public loadSolicitudes(): Observable<Solicitud[]>  {
        return this.http.get<Solicitud[]>('http://localhost:5044/solicitud');
    }

    private getSuccessfulResponse(response: any): Observable<Solicitud[]> {
        const result = response.data;
        return of(result);
    }

    private catchError(error: Error): Observable<Solicitud[]> {
        console.log(error);
        return of([]);
    }
}