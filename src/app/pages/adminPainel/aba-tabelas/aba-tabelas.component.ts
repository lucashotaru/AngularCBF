import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aba-tabelas',
  templateUrl: './aba-tabelas.component.html',
  styleUrls: ['./aba-tabelas.component.scss']
})
export class AbaTabelasComponent {
  constructor(private http: HttpClient) { }


  uploadFile(url: string, file: File): Observable<HttpEvent<any>> {

    let formData = new FormData();
    formData.append('upload', file);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    return this.http.request(req);
  }
}
