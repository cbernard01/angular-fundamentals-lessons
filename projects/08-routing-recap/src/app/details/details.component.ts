import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from './details';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if(product) {
    <section>
      <p>{{ product.title }}</p>
      <ul>
        <li>{{ product.price }}</li>
        <li>{{ product.description }}</li>
      </ul>
    </section>
    } @else {
    <p>Product not found</p>
    }
  `,
  styles: ``,
})
export class DetailsComponent {
  product: Product | undefined;

  @Input() set id(value: number) {
    this.product = this.productList[value];
  }

  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];
}
