import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UploadDownloadService } from 'src/app/Services/upload.service';
export interface ProgressStatus {
  status: ProgressStatusEnum;
  percentage?: number;
}

export enum ProgressStatusEnum {
  START,
  COMPLETE,
  IN_PROGRESS,
  ERROR,
}
@Component({
  selector: 'app-aba-tabelas',
  templateUrl: './aba-tabelas.component.html',
  styleUrls: ['./aba-tabelas.component.scss'],
})
export class AbaTabelasComponent {
  tipo: string = "/"+"campeonato-brasileiro";
  serie: string = "/"+"serie-c";

  @Input() public disabled: boolean;
  @Output() public uploadStatus: EventEmitter<ProgressStatus>;
  @ViewChild('inputFile') inputFile: ElementRef;
  
  constructor(private service: UploadDownloadService) {
    this.uploadStatus = new EventEmitter<ProgressStatus>();
  }
  
  public upload(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadStatus.emit({status: ProgressStatusEnum.START});
      this.service.uploadFile(file).subscribe(
        data => {
          if (data) {
            switch (data.type) {
              case HttpEventType.UploadProgress:
                this.uploadStatus.emit( {status: ProgressStatusEnum.IN_PROGRESS, percentage: Math.round((data.loaded / data.total) * 100)});
                break;
              case HttpEventType.Response:
                this.inputFile.nativeElement.value = '';
                this.uploadStatus.emit( {status: ProgressStatusEnum.COMPLETE});
                break;
            }
          }
        },
        error => {
          this.inputFile.nativeElement.value = '';
          this.uploadStatus.emit({status: ProgressStatusEnum.ERROR});
        }
      );
    }
  }


  public download() {
    this.service.downloadFile()
  }
}
