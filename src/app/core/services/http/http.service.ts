import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

import { environment } from '@env';

import { AppService } from '@app/app.service';

import { Observable, from } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators/index';

@Injectable()
export class HttpService {

  private doesNotHandleLoading: boolean;

  constructor(
    protected transferState: TransferState,
    private httpClient: HttpClient,
    private appService: AppService
  ) {
  }

  /**
   * Performs a request http method.
   */
  public request(
    method: string,
    uri: string | Request,
    options?: {}
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    return this.getData(method, uri, options, (requestMethod: string, url: string, requestOptions: any) => {
      return this.httpClient.request(requestMethod, this.getHttpUrl(url), requestOptions);
    });
  }

  /**
   * Performs a request with `get` http method.
   */
  get(
    url: string,
    options?: {},
    doesNotHandleLoading = false
  ): Observable<any> {
    this.doesNotHandleLoading = doesNotHandleLoading;
    this.isLoading = true;

    options = this.getHeaderOptions(options);
    return this.getData('get', url, options, (requestMethod: string, requestUrl: string, requestOptions: any) => {
      return this.httpClient.get(this.getHttpUrl(requestUrl), requestOptions);
    });
  }

  /**
   * Performs a request with `post` http method.
   */
  post(
    url: string,
    body: any,
    options?: {},
    doesNotHandleLoading = false
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    this.isLoading = true;

    return this.getPostData(url, body, options, (requestUrl: string, requestBody: any, requestOptions: any): Observable<any> => {
      return this.httpClient.post(this.getHttpUrl(requestUrl), requestBody, requestOptions);
    });
  }

  /**
   * Performs a request with `put` http method.
   */
  put(
    url: string,
    body: any,
    options?: {}
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    return this.getPostData(url, body, options, (requestUrl: string, requestBody: any, requestOptions: any): Observable<any> => {
      return this.httpClient.put(this.getHttpUrl(requestUrl), requestBody, requestOptions);
    });
  }

  /**
   * Performs a request with `delete` http method.
   */
  delete(
    url: string,
    options?: {}
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    return this.getData('delete', url, options, (method: string, requestUrl: string, requestOptions: any) => {
      return this.httpClient.delete(this.getHttpUrl(requestUrl), requestOptions);
    });
  }

  /**
   * Performs a request with `patch` http method.
   */
  patch(
    url: string,
    body: any,
    options?: {}
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    // tslint:disable-next-line:max-line-length
    return this.getPostData(url, body, options, (requestUrl: string, requestBody: any, requestOptions: any): Observable<any> => {
      return this.httpClient.patch(this.getHttpUrl(requestUrl), requestBody, requestOptions);
    });
  }

  /**
   * Performs a request with `head` http method.
   */
  head(
    url: string,
    options?: {}
  ): Observable<any> {
    options = this.getHeaderOptions(options);
    return this.getData('head', url, options, (requestMethod: string, requestUrl: string, requestOptions: any) => {
      return this.httpClient.head(this.getHttpUrl(requestUrl), requestOptions);
    });
  }

  /**
   * Performs a request with `options` http method.
   */
  options(url: string, options?: {}): Observable<any> {
    options = this.getHeaderOptions(options);
    return this.getData('options', url, options, (requestMethod: string, requestUrl: string, requestOptions: any) => {
      return this.httpClient.options(requestUrl, requestOptions);
    });
  }

  private getData(
    method: string,
    uri: string | Request,
    options: any,
    callback: (method: string, uri: string | Request, options: any) => Observable<any>
  ): any {
    let url = uri;

    if (typeof uri !== 'string') {
      url = uri.url;
    }

    const key = url + (options ? JSON.stringify(options) : '');

    try {
      return this.resolveData(key);
    } catch (e) {
      return callback(method, uri, options)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
          tap(data => {
            if (options !== undefined && options.isCached) {
              this.setCache(key, data);
            }
          })
        );
    }
  }

  private getHttpUrl(url: string): any {
    return environment.apiUrl + url;
  }

  private getPostData(
    uri: string | Request,
    body: any, options: any,
    callback: (uri: string | Request, body: any, options: any) => Observable<Response>
  ): any {

    let url = uri;

    if (typeof uri !== 'string') {
      url = uri.url;
    }

    const key = url + (body ? JSON.stringify(body) : '') + (options ? JSON.stringify(options) : '');
    try {
      return this.resolveData(key);
    } catch (e) {
      return callback(uri, body, options)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
          tap(data => {
            if (options !== undefined && options.isCached) {
              this.setCache(key, data);
            }
          })
        );
    }
  }

  private resolveData(key: string): any {
    const data = this.getFromCache(key);

    if (!data) {
      throw new Error();
    }

    return from(Promise.resolve(data));
  }

  private setCache(key, data): any {
    return this.transferState.set(key, data);
  }

  private getFromCache(key): any {
    return this.transferState.get(key, null);
  }

  private getHeaderOptions(
    options?: {
      headers?: HttpHeaders | {
        [header: string]: string | string[];
      };
      observe?: 'response';
      params?: HttpParams | {
        [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
      contentType?: 'application/json';
    }
  ) {
    const headerOptions = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    if (options !== undefined && options.contentType ) {
      headerOptions['Content-Type'] = options.contentType;
    }

    const headers = new HttpHeaders((<any>Object).assign(headerOptions));

    return { headers: headers };
  }

  set isLoading(isLoading: boolean) {
    if (!this.doesNotHandleLoading) {
      this.appService.setLoadingStatus(isLoading);
    }
  }
}
