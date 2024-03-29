import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroment/app.enviroment';


@Injectable({
    providedIn: 'root'
})
export class TempoMaximoUsuarioPlanoService {
    constructor(private http: HttpClient) { }

    getTemposDeAplicacaoDosPlanos(): Observable<any> {

        const  httpHeaders = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('access-token')
        })

        return this.http.get<any>(enviroment.API_URL + '/api/tempoDeAplicacao', {headers:httpHeaders} );
    }
}
