import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'logout',
  template: '', // No UI template
})
export class LogoutComponent {

  constructor(private authService: AuthenticationService) {
     this.logout();
   }

  logout() {
    // Add your action logic here
    this.authService.logout();
  }
}