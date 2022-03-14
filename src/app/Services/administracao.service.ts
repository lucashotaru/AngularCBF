import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';


@Injectable()
export class AdministracaoService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post('http://localhost:5000/LeitorCSV/importar-jogos-cbf', formParams)
  }
}


