import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  
  <app-cart-summary></app-cart-summary>
  
  <div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 20px;">
    <app-product-card-component
      *ngFor="let product of products"
      [name]="product.name"
      [price]="product.price"
      [image]="product.image">
    </app-product-card-component>
  </div>

  <hr>
  <app-todo></app-todo>
  <app-parent></app-parent>
  <app-footer></app-footer>
  <app-user></app-user>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';
  
  products = [
    { name: 'Smartphone', price: 699, image: 'https://placehold.co/200x150/png?text=Phone' },
    { name: 'Laptop', price: 999, image: 'https://placehold.co/200x150/png?text=Laptop' },
    { name: 'Headphones', price: 199, image: 'https://placehold.co/200x150/png?text=Headphones' }
  ];
}
