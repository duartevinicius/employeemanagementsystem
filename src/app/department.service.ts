import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDepartments } from './departments';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _url = '/assets/data/departments.json';

  constructor(private http: HttpClient) { }
  public getDepartments(): Observable<IDepartments[]> {
    return this.http.get<IDepartments[]>(this._url);
  }
}
