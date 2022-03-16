import { DownloadTabelaCBFApi } from './../../../../apis/downloadTabelaCBF.api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloadTabelas',
  templateUrl: './downloadTabelas.component.html',
  styleUrls: ['./downloadTabelas.component.scss'],
})
export class DownloadTabelasComponent {
  constructor(private api:DownloadTabelaCBFApi) {}

  downloadFile() {
return this.api.downloadFile()
  }
  ngOnInit() {}
}
