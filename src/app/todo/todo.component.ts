import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;
  constructor(private todoService:TodoDataService, private route: ActivatedRoute, private router: Router){
    
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false, new Date());

    if(this.id != -1){
      this.todoService.retriveTodo('gowri',this.id).subscribe(
        data => this.todo =data
        )
      }
  }

  saveTodo(id:number){
    if(this.id === -1){
      //Create TODO 
      this.todoService.createTodo('gowri',this.todo).subscribe(
        data => {console.log(data)
        this.router.navigate(['todos']);}
    )
    
    }else {
        this.todoService.updateTodo('gowri',this.id,this.todo).subscribe(
          data => {console.log(data)
          this.router.navigate(['todos']);}
          )
      }
  }
}
