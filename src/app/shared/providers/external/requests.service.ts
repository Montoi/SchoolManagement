import { Injectable } from '@angular/core';
import { IResponse, IStudent, ISubjectResponse, ISubjects, ISubjectServerResponse } from '../../models/main.interfaces';
import { HttpService } from '../core/http.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private httpService: HttpService, private http: HttpClient) { }

  public getStudents(): Promise<IResponse> {
    return this.httpService.http_get({
      endpoint: '',
      api: 'StudentAPI',
    }) as Promise<IResponse>;
  }
  public postStudents(student: any): Promise<any> {
    return this.httpService.http_post({
      endpoint: '',
      body: JSON.stringify(student),
      api: 'StudentAPI'
    }) as Promise<any>;
  }
  public deleteStudents(id: number): Promise<IResponse> {
    return this.httpService.http_delete({
      endpoint: `${id}`,
      api: 'StudentAPI',
    }) as Promise<IResponse>;
  }



  //MATERIAS
  public getSubject(id: number): Promise<ISubjectResponse> {
    return this.httpService.http_get({
      endpoint: `${id}`,
      api: 'StudentSubjects',
    }) as Promise<ISubjectResponse>;
  }

  public postSubject(subject: any): Promise<any> {
    return this.httpService.http_post({
      endpoint: '',
      body: JSON.stringify(subject),
      api: 'StudentSubjects'
    }) as Promise<any>;
  }
  public putSubject(subject: any): Promise<any> {
    return this.httpService.http_put({
      endpoint: '',
      body: JSON.stringify(subject),
      api: 'StudentSubjects'
    }) as Promise<any>;
  }



}
