import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tabelas } from 'src/app/models/Tabelas.model';

@Injectable({
  providedIn: 'root',
})
export class SeriaAService {


  constructor(private httpClient: HttpClient){}

  getConfig() {
    // now returns an Observable of Config
    return this.httpClient.get<Tabelas[]>('https://localhost:7056/api/Cards');
  }
}
