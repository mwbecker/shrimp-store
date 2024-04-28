import { Component, OnInit } from '@angular/core';
import { Shrimp, ShrimpCart } from '../shrimp';
import { ShrimpService } from '../services/shrimp.service';
import { environment } from '../../environments/environment';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.css'
})
export class StorefrontComponent {
  shrimps: Shrimp[] = [];
  baseUrl: string = environment.httpBaseURL;


  constructor(private shrimpService: ShrimpService, 
              public cartService: CartService
  ) { }

  getShrimps(): void {
    this.shrimpService.getShrimps()
    .subscribe(shrimps => {
      this.shrimps = shrimps;
      // Initialize cart and quantities with 1 and not added to cart
      this.cartService.intializeShrimpCartObject(shrimps);
     
    });
  }

  ngOnInit(): void {
    this.getShrimps();
  }

}
