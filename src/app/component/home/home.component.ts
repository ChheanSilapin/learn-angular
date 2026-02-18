import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { name: 'Smartphone', price: 699, image: 'https://placehold.co/200x150/png?text=Phone' },
    { name: 'Laptop', price: 999, image: 'https://placehold.co/200x150/png?text=Laptop' },
    { name: 'Headphones', price: 199, image: 'https://placehold.co/200x150/png?text=Headphones' }
  ];
}
