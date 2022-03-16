import { DataService } from './../Services/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ImportarCBFApi {

    constructor(private data: DataService) {
    }
    public importarCBF(tabelas: any) {
      let formParams = new FormData();
    formParams.append('file', tabelas)
    return this.data.download('http://localhost:5000/LeitorCSV/importar-jogos-cbf', formParams)
    }
}
