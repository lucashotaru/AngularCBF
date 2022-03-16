import { ImportarCBFApi } from './../../../../apis/importarCBF.api';
import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';


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

  constructor(private api: ImportarCBFApi, private msg: NzMessageService) {}

  ngOnInit() {}

  async enviarArquivo() {
    const resposta = await this.api.importarCBF(this.arquivos);
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
