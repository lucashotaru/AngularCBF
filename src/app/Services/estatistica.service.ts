import { Times } from './../models/times.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temporada } from '../models/temporada.models';

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application.json"})}

@Injectable({
  providedIn: 'root'
})
export class EstatisticaService {

  readonly url = "https://localhost:7126/estatistica";

  constructor(private http:HttpClient) { }

  //Temporadas

  getTemporada(id:number|string):Observable<Temporada>{
    return this.http.get<Temporada>(this.url + `/Temporada/${id}`);
  }

  getTemporadasList():Observable<Temporada[]> {
    return this.http.get<Temporada[]>(this.url+'/Temporada');
  }

  addTarefa(data:Temporada){
    return this.http.post(this.url + '/Temporada', data);
  }

  putTemporada(id:number|string, data:Temporada){
    return this.http.put(this.url + `/Temporada/${id}`, data);
  }

  deleteTemporada(id:number|string){
    return this.http.delete(this.url + `/Temporada/${id}`);
  }

  // Times

  getTime(id:number|string):Observable<Times>{
    return this.http.get<Times>(this.url + `/Time/${id}`);
  }

  getTimesList():Observable<Times[]>{
    return this.http.get<Times[]>(this.url + '/Time');
  }

  addTime(data:Times){
    return this.http.post(this.url + '/Time', data);
  }

  putTime(id:number|string, data:Times){
    return this.http.put(this.url + `/Time/${id}`, data);
  }

  deleteTime(id:number|string){
    return this.http.delete(this.url + `/Time/${id}`);
  }

}
