import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http:HttpClient) { }

  updateEmployeeDetails(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/updateEmployeeDetails",employee,
    {responseType:'text'});
  }

  getEmployeeDetails(employee:Employee):Observable<any>{
    return this.http.post("http://localhost:9090/api/employee/getEmployeeInfo",employee,
    {responseType:'text'}
    )
  }
}
