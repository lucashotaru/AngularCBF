import { ImportarCBFApi } from './../../../../apis/importarCBF.api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-administracao',
  templateUrl: './uploadTabelas.component.html',
  styleUrls: ['./uploadTabelas.component.scss'],
})
export class UploadTabelasComponent {
  public arquivos: any;

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.arquivos = event.target.files[0];
  }

  constructor(private api: ImportarCBFApi) {}

  ngOnInit() {}

  async enviarArquivo() {
    const resposta = await this.api.importarCBF(this.arquivos);
  }
}
