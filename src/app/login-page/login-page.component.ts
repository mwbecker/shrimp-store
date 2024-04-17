import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service'

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
  private tokenKey = 'token';

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      //perform further logics
      localStorage.setItem(this.tokenKey, user.idToken);
      this.router.navigate(['/']);

    });
  }
}