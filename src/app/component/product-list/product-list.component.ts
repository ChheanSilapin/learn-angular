import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Smartphone', price: 699, image: 'https://placehold.co/200x150/png?text=Phone' },
    { name: 'Laptop', price: 999, image: 'https://placehold.co/200x150/png?text=Laptop' },
    { name: 'Headphones', price: 199, image: 'https://placehold.co/200x150/png?text=Headphones' }
  ];
}
