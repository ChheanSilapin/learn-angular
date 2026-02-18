import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  items: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Note: In a real app, we'd use Observables here. 
    // For this exercise, we'll just read the state directly, 
    // but this won't auto-update unless we use DoCheck or RxJS (next phase!).
  }

  // Getter to always get fresh data when template checks
  get cartItems() {
    return this.cartService.getItems();
  }

  get cartTotal() {
    return this.cartService.getTotal();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
}
