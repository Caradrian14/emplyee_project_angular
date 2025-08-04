import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule],
  templateUrl: './leave.html',
  styleUrl: './leave.scss'
})
export class Leave {
  @ViewChild("newModal") newModal!: ElementRef;

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
}
