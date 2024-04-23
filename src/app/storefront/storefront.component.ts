import { Component, OnInit } from '@angular/core';
import { Shrimp } from '../shrimp';
import { ShrimpService } from '../services/shrimp.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.css'
})
export class StorefrontComponent {
  shrimps: Shrimp[] = [];
  baseUrl: string = environment.httpBaseURL;

  constructor(private shrimpService: ShrimpService) { }

  getShrimps(): void {
    this.shrimpService.getShrimps()
    .subscribe(shrimps => this.shrimps = shrimps);
  }

  ngOnInit(): void {
    this.getShrimps();
  }

}
