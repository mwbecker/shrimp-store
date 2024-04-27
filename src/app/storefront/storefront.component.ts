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
  shrimpQuantities: { [shrimpId: number]: number } = {}; // Dictionary to hold shrimp quantities


  constructor(private shrimpService: ShrimpService) { }

  getShrimps(): void {
    this.shrimpService.getShrimps()
    .subscribe(shrimps => {
      this.shrimps = shrimps;
      this.shrimps.forEach(shrimp => {
        this.shrimpQuantities[shrimp.id] = 1;
      })
    });
  }

  ngOnInit(): void {
    this.getShrimps();
  }

  incrementQuantity(shrimpId: number): void {
    console.log(this.shrimpQuantities)
    this.shrimpQuantities[shrimpId]++;
  }

  decrementQuantity(shrimpId: number): void {
    console.log(this.shrimpQuantities)
    if (this.shrimpQuantities[shrimpId] > 1) {
      this.shrimpQuantities[shrimpId]--;
    }
  }

  getQuantity(shrimpId: number): number {
    return this.shrimpQuantities[shrimpId] || 1;
  }

  addToCart(shrimp: Shrimp): void {
    const quantity = this.shrimpQuantities[shrimp.id];
    // Implement your logic to add the shrimp to the cart
    console.log(`Added ${quantity} ${shrimp.name} to cart`);
  }

}
