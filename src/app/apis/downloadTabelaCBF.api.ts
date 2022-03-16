import { HttpClient } from '@angular/common/http';
import { DataService } from '../Services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DownloadTabelaCBFApi {
  constructor(private http: HttpClient) {}
  public downloadFile() {
    console.log('chegou aki')

    return this.http.request('GET', 'http://localhost:5000/CriadorDeExcell/criar-excel-jogos-cbf' , {responseType : 'blob'})
  }
}
