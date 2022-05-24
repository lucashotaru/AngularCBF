import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadDownloadService {
  private baseApiUrl: string;
  private apiDownloadUrl: string;
  private apiUploadUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseApiUrl = 'https://localhost:7126';
    this.apiDownloadUrl = this.baseApiUrl + '/api/PainelAdmin/download';
    this.apiUploadUrl = this.baseApiUrl + '/api/PainelAdmin/upload';
  }

  public downloadFile(): Observable<HttpEvent<Blob>> {
    return this.httpClient.get<any>(this.apiDownloadUrl, {responseType: 'blob' as 'json' });
  }

  

  public uploadFile(file: Blob): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.request(
      new HttpRequest('POST', this.apiUploadUrl, formData, {})
    );
  }
}
