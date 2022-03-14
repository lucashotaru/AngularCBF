import { AdministracaoService } from './../../../Services/administracao.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.scss']
})

export class AdministracaoComponent{
  file: any = null;

 constructor(
   private uploadService: AdministracaoService
 ){

 }

 onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }

 upload() {
   if (this.file) {
     this.uploadService.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }
}

