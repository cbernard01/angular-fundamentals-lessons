import { Component, inject } from '@angular/core';
import { User } from '../data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  providers: [UserService],
  standalone: true,
  template: `
    <section>
      <h2>User Information</h2>
      @if(userData.length > 0) {
      <ol>
        @for(user of userData; track user.id) {
        <li>
          <span>{{ user.name }}</span>
          <span>{{ user.email }}</span>
        </li>
        }
      </ol>
      } @else {
      <p>No user data available</p>
      }
    </section>
  `,
  styles: ``,
})
export class UserInfoComponent {
  userServer = inject(UserService);
  userData: User[] = [];

  constructor() {
    this.userServer.getUserData().then((data) => (this.userData = data));
  }
}
