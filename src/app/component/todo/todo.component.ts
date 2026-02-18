import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // Property: the new todo text (bound to input via ngModel)
  newTodo: string = '';

  // Property: the list of todos
  todos: string[] = [];

  // Method: add a todo to the list
  addTodo(): void {
    const trimmed = this.newTodo.trim();
    if (trimmed) {
      this.todos.push(trimmed);
      this.newTodo = '';  // clear the input
    }
  }

  // Method: delete a todo by index
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
