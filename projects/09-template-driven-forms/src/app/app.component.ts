import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input id="title" name="title" type="text" [(ngModel)]="title" />

        <label for="body">Post Body</label>
        <textarea
          id="body"
          name="body"
          rows="4"
          cols="50"
          [(ngModel)]="body"
        ></textarea>
      </section>
      <section>
        <p>Display {{ title }}</p>
        <p>Display {{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '';
  body = '';
}
