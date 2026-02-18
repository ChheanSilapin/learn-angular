import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete<User>(`${this.baseUrl}/users/${id}`);
  }

  searchUsers(term: string) {
    return this.http.get<User[]>(`${this.baseUrl}/users?name_like=${term}`);
  }
}
