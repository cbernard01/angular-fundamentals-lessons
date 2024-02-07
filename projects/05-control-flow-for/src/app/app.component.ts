import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for(car of carList; track car.id) {
      <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="{{ car.image }}" />
        </div>
        <section class="details">
          <p class="title">{{ car.make }} {{ car.model }}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{ car.year }}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{ car.transmission }}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{ car.miles }}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>&dollar;{{ car.price }}</span>
          </p>
        </section>
      </article>
      } @empty {
      <p>No listings available</p>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      id: 1,
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
      image: 'assets/red-car.jpeg',
    },
    {
      id: 2,
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      image: 'assets/red-car.jpeg',
    },
    {
      id: 3,
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
      image: 'assets/blue-car.jpeg',
    },
    {
      id: 4,
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
      image: 'assets/blue-car.jpeg',
    },
  ];
}
