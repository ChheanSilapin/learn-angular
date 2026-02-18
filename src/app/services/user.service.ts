import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string[] = ['Alice', 'Bob', 'Charlie'];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string): void {
    this.users.push(name);
  }
}