import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Shrimp, ShrimpCart } from '../shrimp';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shrimpQuantities: { [shrimpId: number]: ShrimpCart } = {}; // Dictionary to hold shrimp quantities
  cartTokenNameStr: string  = "cart";
  constructor(private storageService:StorageService) { }
   
  intializeShrimpCartObject(shrimps:Shrimp[]):void {
    shrimps.forEach(shrimp => {
      this.shrimpQuantities[shrimp.id] = {
        ...shrimp,
        quantity: 1,
        isAdded: false,
    };
  })
   this.storageService.setItemJSON(this.cartTokenNameStr, this.shrimpQuantities)
  }

  incrementQuantity(shrimpId:number): void {
    this.shrimpQuantities = this.storageService.getItemJSON(this.cartTokenNameStr);
    this.shrimpQuantities[shrimpId].quantity++;
    // Save cart to session storage
    this.storageService.setItemJSON(this.cartTokenNameStr, this.shrimpQuantities);
  }

  decrementQuantity(shrimpId:number): void {
    this.shrimpQuantities = this.storageService.getItemJSON(this.cartTokenNameStr);
    if (this.shrimpQuantities[shrimpId].quantity > 1) {
      this.shrimpQuantities[shrimpId].quantity--;
    }
    // Save cart to session storage
    this.storageService.setItemJSON(this.cartTokenNameStr, this.shrimpQuantities)
  }

  getQuantity(shrimpId: number): number {
    this.shrimpQuantities = this.storageService.getItemJSON(this.cartTokenNameStr);
    return this.shrimpQuantities[shrimpId].quantity || 1;
  }

  addToCart(shrimpId: number): void {
    this.shrimpQuantities = this.storageService.getItemJSON(this.cartTokenNameStr);
    this.shrimpQuantities[shrimpId].isAdded = true;
    /// Save cart to session storage
    this.storageService.setItemJSON(this.cartTokenNameStr, this.shrimpQuantities)
  }
  
}
