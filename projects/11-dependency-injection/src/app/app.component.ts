import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: `
    <main>
      <h1>User Listing</h1>
      <app-user-info />
    </main>
  `,
})
export class AppComponent {}
