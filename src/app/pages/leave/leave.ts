import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { employeeService } from '../../services/employee';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './leave.html',
  styleUrl: './leave.scss'
})
export class Leave implements OnInit{
  @ViewChild("newModal") newModal!: ElementRef;
  employeeService = inject(employeeService)


  leaveForm: FormGroup = new FormGroup({
    leaveId: new FormControl(0),
    employeeId: new FormControl(0),
    formData: new FormControl(''),
    toDate: new FormControl(''),
    noOfDays: new FormControl(''),
    leaveType: new FormControl(''),
    details: new FormControl(''),
    isApproved: new FormControl(false),
    approvedData:new FormControl(null), 
  })

  leaveList: any[]=[];

  ngOnInit(): void {
    this.loadLeaves();
  }

  constructor() {
    debugger;
    const loggerData = localStorage.getItem("leaveUSer")
    if(loggerData != null) {
      const loggerParseData = JSON.parse(loggerData)
        this.leaveForm.controls['employeeId'].setValue(loggerParseData.empId)
    }
  }

  loadLeaves() {
    const empId = this.leaveForm.controls['employeeId'].value;
    this.employeeService.getAllLeaveByEmpId(empId).subscribe({
      next:(result:any)=> {
        this.leaveList = result.data;
      }
    });
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

  onSave() {
    const formValue = this.leaveForm.value;
    this.employeeService.onAddLeave(formValue).subscribe({
      next:()=>{

      }
    })
  }
}
