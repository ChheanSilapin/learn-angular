import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() { }

  addItem(product: any): void {
    this.cart.push(product);
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
  }

  getItems(): any[] {
    return this.cart;
  }

  getCount(): number {
    return this.cart.length;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
