import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IHttpOptions } from '../../models/http-options.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly BASE_URL = environment.baseURL;
  private readonly TEST_BASE_URL = environment.baseURL;
  constructor(private http: HttpClient) { }

  public http_get(options: IHttpOptions): any{
    const { endpoint, param, needToken } = options;

    const API = options.api;
    const isTestMode = true;

    if (!API) {
      console.warn('[HTTP] Error en el request, No se ha especificado una API');
      return ;
    }

    return new Promise((resolve, reject) => {
      let url: string;
      let headers = new HttpHeaders();
      // if (needToken) headers = headers.append('Authorization', 'Bearer ' + this.dataCentralService.accessToken);

      const baseURL = isTestMode ? this.TEST_BASE_URL : this.BASE_URL;
      if (param) {
        url = `${baseURL}/${API}/${endpoint}/${param}`;
      } else {
        //const EP = `${endpoint}?&key=${Math.floor(Math.random() * 1000000)}`;
        url = `${baseURL}/${API}/${endpoint}`;
      }

      this.http.get(url, { headers }).subscribe(
        (data) => {
          resolve(data);
        },
        async (err: HttpErrorResponse) => {
          if (err.status === 404) {
            console.log('Sin corregir')
            return
          }
          console.log('[HTTP] Error en el request -> ', err);
          reject(err);
        }
      );
    });
  }

   public http_post(options: IHttpOptions): any {
    const { endpoint, body, needToken, responseType } = options;

    const API = options.api;
    const isTestMode = true;

    if (!body) {
      console.warn('[HTTP] Error en el request, No se ha enviado ningun body');
      return;
    }

    if (!API) {
      console.warn('[HTTP] Error en el request, No se ha especificado una API');
      return;
    }
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      // if (needToken) headers = headers.append('Authorization', 'Bearer ' + this.dataCentralService.accessToken);
      const baseURL = isTestMode ? this.TEST_BASE_URL : this.BASE_URL;
      this.http.post(`${baseURL}/${API}/${endpoint}`, body, {headers}, ).subscribe(
        (data) => {
          resolve(data);
        },
        async (err: HttpErrorResponse) => {
          if (err.status === 422) {
            resolve(err); /// En este caso no es un error del server, sino un error de validacion (En esta API especificamente)
          }

          console.log(err);
          reject(err);
        }
      );
    });
  }
  public http_delete(options: IHttpOptions): any{
    const { endpoint, param, needToken } = options;

    const API = options.api;
    const isTestMode = true;

    if (!API) {
      console.warn('[HTTP] Error en el request, No se ha especificado una API');
      return ;
    }

    return new Promise((resolve, reject) => {
      let url: string;
      let headers = new HttpHeaders();
      // if (needToken) headers = headers.append('Authorization', 'Bearer ' + this.dataCentralService.accessToken);

      const baseURL = isTestMode ? this.TEST_BASE_URL : this.BASE_URL;
      if (param) {
        url = `${baseURL}/${API}/${endpoint}/${param}`;
      } else {
        //const EP = `${endpoint}?&key=${Math.floor(Math.random() * 1000000)}`;
        url = `${baseURL}/${API}/${endpoint}`;
      }

      this.http.delete(url, { headers }).subscribe(
        (data) => {
          resolve(data);
        },
        async (err: HttpErrorResponse) => {

          console.log('[HTTP] Error en el request -> ', err);
          reject(err);
        }
      );
    });


  }
  public http_put(options: IHttpOptions): any {
    const { endpoint, body, needToken, responseType } = options;

    const API = options.api;
    const isTestMode = true;


    if (!body) {
      console.warn('[HTTP] Error en el request, No se ha enviado ningun body');
      return;
    }

    if (!API) {
      console.warn('[HTTP] Error en el request, No se ha especificado una API');
      return;
    }

    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      // if (needToken) headers = headers.append('Authorization', 'Bearer ' + this.dataCentralService.accessToken);
      const baseURL = isTestMode ? this.TEST_BASE_URL : this.BASE_URL;
      this.http.put(`${baseURL}/${API}/${endpoint}`, body, {headers}, ).subscribe(
        (data) => {
          resolve(data);
        },
        async (err: HttpErrorResponse) => {
          if (err.status === 422) {
            resolve(err); /// En este caso no es un error del server, sino un error de validacion (En esta API especificamente)
          }

          console.log(err);
          reject(err);
        }
      );
    });
  }





}
