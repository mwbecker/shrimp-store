import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login-page',
  standalone:true,
  imports:[
    CommonModule,
    GoogleSigninButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  constructor( private authService:SocialAuthService,
               private router:Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      //perform further logics
      localStorage.setItem(environment.tokenKey, user.idToken);
      this.router.navigate(['/']);
    });
  }
}