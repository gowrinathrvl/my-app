import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAlltodos(username: String){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    // console.log("Execute Hello world Bean Service");
  }
  deleteTodos(username:string, id:number){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);

  }
  retriveTodo(username:string, id:number){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);

  }
  updateTodo(username:string, id:number, todo: Todo){
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`,todo);

  }
  createTodo(username:string, todo: Todo){
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`,todo);

  }
  
}
