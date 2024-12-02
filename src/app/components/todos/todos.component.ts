import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'; 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  
 todos:Todo[] | undefined;
title: any;
index: any;

inputTodo:string= "";

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
       content :'First Todo',
       completed : false  
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }

  toggleDone(id:number){
    this.todos?.map((v,i) => {
      if(i == id) v.completed = !v.completed; 

      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  addTodo(){
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });
  }
}
