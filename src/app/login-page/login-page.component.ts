import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from "../services/authentication.service"
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
  constructor( private socialAuthService:SocialAuthService,
               private authService:AuthenticationService,
               private router:Router) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      //perform further logics
      this.authService.login(user.idToken);
    });
  }
}