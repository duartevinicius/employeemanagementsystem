import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:semicolon
  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
    // retorna um observable com cast de employee
  }
  public getEmployee(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._url + '/' + id);
    // retorna um observable com cast de employee
  }
  public testgetEmployees(): Observable<any> {
    return this.http.get<any>(this._url);
    // retorna um observable com cast de employee
  }
}
