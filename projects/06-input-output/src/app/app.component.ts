import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      @for (carItem of carList; track carItem.id) {
      <app-listing [car]="carItem" (carSaved)="addCarToSaved($event)" />
      }
    </section>
    <section>
      @for(savedCarItem of savedCarList; track savedCarItem.id) {
      <p>{{ savedCarItem.make }} {{ savedCarItem.model }}</p>
      } @empty {
      <p>No saved cars</p>
      }
    </section>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      id: 1,
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      id: 2,
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 3,
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 4,
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
