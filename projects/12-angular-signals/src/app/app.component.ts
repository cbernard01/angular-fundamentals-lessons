import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `<main>
    <h1>Building a TODO List</h1>
    <p>Completed Todos: {{ completedTodoCount() }}</p>

    <section>
      @for(todo of todos(); track todo.id) {
      <label
        [ngStyle]="{
          'text-decoration': todo.completed ? 'line-through' : 'none'
        }"
      >
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="updateTodo(todo)"
        />
        {{ todo.title }}
      </label>
      }
    </section>
  </main>`,
  styles: `label { display: block }`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: 'Learn Angular',
      completed: false,
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn RxJS',
      completed: false,
    },
  ]);

  completedTodoCount = computed<number>(
    () => this.todos().filter((t) => t.completed).length
  );

  updateTodo(todo: Todo) {
    this.todos.update((todoList) => {
      return todoList.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  }
}
