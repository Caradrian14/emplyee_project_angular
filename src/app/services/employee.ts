import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APIResponseModel } from '../model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class employeeService {
  constructor(private http: HttpClient ) {}

  onLogin (obj: any) {
    return this.http.post("https://freeapi.miniprojectideas.com/apiEmployeeLeave/Login", obj)
  }

  getAllEmployees (): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("https://freeapi.minipprojectideas.com/api/EmployeeLeave/GetEmployees")
  }

  getDptm(){
    return this.http.get("https://freeapi.minipprojectideas.com/api/EmployeeLeave/GetDepartments").pipe(
      map((res:any) => res.data));
  }

  getRoles(){
    return this.http.get("https://freeapi.minipprojectideas.com/api/EmployeeLeave/GetAllRoles").pipe(
      map((res:any) => res.data));
  }
}
