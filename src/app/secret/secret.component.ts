import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  
  constructor(
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.messageService.add("Visited Secret Page")
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
