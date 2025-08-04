import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { employeeService } from '../../services/employee';
import { APIResponseModel, EmployeeList } from '../../model/Employee.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [AsyncPipe],
  templateUrl: './employee.html',
  styleUrl: './employee.scss'
})
export class Employee implements OnInit{

  employeeService = inject(employeeService)

  employeeList: EmployeeList[]=[]

  @ViewChild("newModal") newModal!: ElementRef;

  roleList$:Observable<any[]> = new Observable<any[]>;

  ngOnInit(): void {
    this.getEmployees();
    this.roleList$ = this.employeeService.getDptm();
  }
  
  getEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next:(response:APIResponseModel)=> {
        this.employeeList = response.data;
      },
      error:()=>{

      }
    })
  }

  openModal() {
    if(this.newModal) {
      this.newModal.nativeElement.style.display="block"
    }
  }

    closeModal() {
    if(this.newModal) {
      this.newModal.nativeElement.style.display="none"
    }
  }

  onSubmit() {
    
  }
}
