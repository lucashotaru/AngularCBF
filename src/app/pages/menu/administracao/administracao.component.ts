import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.scss']
})

export class AdministracaoComponent {
  constructor(private msg: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`Arquivo upado com sucesso`);
    } else if (info.file.status === 'error') {
      this.msg.error(`Falha ao upar o arquivo.`);
    }
  }

  size: NzButtonSize = 'large';
}
