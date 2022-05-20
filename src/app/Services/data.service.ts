import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthAPI } from '../apis/auth.api';

const AUTH_API = 'https://localhost:7126/';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  private responseToUrl(data: any): string {
    let blob = new Blob([data]);
    return window.URL.createObjectURL(blob);
  }

  public async download(api: string, query?: any): Promise<string> {
    const params = new HttpParams({ fromObject: query });
    const response = await this.httpClient
      .get(api, { params: params, responseType: 'arraybuffer' })
      .toPromise();
    return this.responseToUrl(response);
  }

  public get<T>(api: string, query?: any, download?: boolean): Promise<T> {
    const params = new HttpParams({ fromObject: query });
    let response: Promise<T>;
    if (download) {
      response = this.httpClient
        .get<T>(api, { params: params, responseType: 'blob' as 'json' })
        .toPromise<T>();
    } else {
      response = this.httpClient
        .get<T>(AUTH_API + api, { params: params })
        .toPromise<T>();
    }
    console.log(response);
    return response;
  }

  public post<T>(
    api: string,
    params?: Object,
    download?: boolean,
    options?: Object
  ): Promise<T> {
    let response: Promise<T>;
    if (download) {
      response = this.httpClient
        .post<T>(api, params, { responseType: 'blob' as 'json' })
        .toPromise<T>();
    } else {
      response = options
        ? this.httpClient.post<T>(api, params, options).toPromise<T>()
        : this.httpClient.post<T>(api, params).toPromise<T>();
    }
    return response;
  }

  public put<T>(
    api: string,
    params?: Object,
    download?: boolean,
    options?: Object
  ): Promise<T> {
    let response: Promise<T>;
    if (download) {
      response = this.httpClient
        .put<T>(api, params, { responseType: 'blob' as 'json' })
        .toPromise<T>();
    } else {
      response = this.httpClient.put<T>(api, params, options).toPromise<T>();
    }
    return response;
  }

  public delete<T>(api: string): Promise<T> {
    return this.httpClient.delete<T>(api).toPromise<T>();
  }
}
