import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

  router = inject(Router)
  logOff() {
    localStorage.removeItem("leaveUser")
    this.router.navigateByUrl("/login")
  }
}
