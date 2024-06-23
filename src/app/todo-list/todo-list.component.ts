import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string | undefined,
    public done:boolean,
    public targetDate:Date,
  ){

  }
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  name=''
  todos: Todo[] = [];
  message:string | undefined;
  // todos =[
  //   new Todo(1,'Learn to code',false,new Date()),
  //   new Todo(2,'Learn Angular',false,new Date()),
  //   new Todo(1,'Learn JS',false,new Date()),
  //   // {id:1, description:'Learn to code'},
  //   // {id:2, description:'Learn Angular'},
  //   // {id:3, description:'Learn JS'},
  // ]
  constructor(private todoService : TodoDataService,
    private router:Router){
  }
  ngOnInit(){
   this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retriveAlltodos('gowri').subscribe(
      response => {
        this.todos = response
      }
     )
  }
  deleteTodo(id:number){
    console.log(id);
    this.todoService.deleteTodos('gowri',id).subscribe(
      Response => {
        console.log(Response);
        this.message = `delete of todo ${id} Sucessfully!!`;
        this.refreshTodos();
      }
    )

  }
  updateTodo(id:number){
    console.log(id);
    this.router.navigate(['todos',id]);
  }
  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
