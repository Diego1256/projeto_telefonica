// plano.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment} from './enviroment/app.enviroment';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {
  private apiUrl = enviroment.API_URL +'/api/busca-plano'; // Substitua pela URL real da sua API

  constructor(private http: HttpClient) {}

  getPlanos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
