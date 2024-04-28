import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shrimp Store';
  constructor(
    private authenticationService: AuthenticationService,
  ) {}
   
  logout() {
    window.location.href = '/logout'; 
  }
  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}
