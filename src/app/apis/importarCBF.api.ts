import { DataService } from './../Services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ImportarCBFApi {

    constructor(private data: DataService) {
    }
    public importarCBF(tabelas: any) {
      let formParams = new FormData();
    formParams.append('file', tabelas)
    return this.data.post('http://localhost:5000/LeitorCSV/importar-jogos-cbf', formParams)
    }

    public importargCBF(tabelas: File): Promise<any> {
      let formParams = new FormData();
    formParams.append('file', tabelas)
      return this.data.post<any>(`http://localhost:5000/LeitorCSV/importar-jogos-cbf`, formParams, undefined, {
          headers: {
              'Content-Disposition' : 'multipart/form-data',
          },
      });
  }
}
