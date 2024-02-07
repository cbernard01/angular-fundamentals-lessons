import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <header>
      <nav>
        <ul>
          @for(productTitle of productTitles; track productTitle){
          <li>
            <a [routerLink]="['details', $index]">{{ productTitle }}</a>
          </li>
          }
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
