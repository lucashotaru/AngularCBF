import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabelas } from 'src/app/models/Tabelas.model';

@Injectable({
  providedIn: 'root',
})
export class SeriaAService {

  api = 'https://localhost:7056/api/cards';

  constructor(private httpClient: HttpClient){}

  BuscarTabelas(): Observable<Tabelas[]> {
    return this.httpClient.get<Tabelas[]>(this.api);
  }
}
