import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../model/Employee.model';
import { Employee, employeeService } from '../../services/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginObject: LoginModel = new LoginModel();

  employeeService = inject(employeeService)
  router = inject(Router)
  onLogin() {
    this.employeeService.onLogin(this.loginObject).subscribe({
      next:(result:any)=>{
        if(result.result) {
          alert("Login Success");
          localStorage.setItem('leaveUser', JSON.stringify(result.data));
          this.router.navigateByUrl("/dashboard")
        } else {
          alert(result.message)
        }
      },
      error:()=> {
        alert('Api error')
      }
    })
  }
}
