import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card-component',
  templateUrl: './product-card-component.component.html',
  styleUrls: ['./product-card-component.component.css']
})
export class ProductCardComponentComponent {
  @Input() name: string = '';
  @Input() price: number = 0;
  @Input() image: string = '';

  constructor(private cartService: CartService) {}

  onAddToCart(): void {
    const product = { name: this.name, price: this.price, image: this.image };
    this.cartService.addItem(product);
  }
}
