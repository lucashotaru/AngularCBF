import { Injectable } from '@angular/core';

@Injectable()
export class ImportarCBFApi {

    constructor() {
    }
    public importarCBF(tabelas: any) {
      let formParams = new FormData();
    formParams.append('file', tabelas)
    }
}
