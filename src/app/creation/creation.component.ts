import { Component, OnInit } from '@angular/core';
import {Todos } from '../core/interface';
import { Storage } from './../core/services/storage/index';
import { Todo } from './../core/interface/index';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  message:string     = "";
  isSaved:boolean    = false;
  element            = 0;
  loadComponent      = false;
  updates            = {};

  myToDoList : Todos = {
    activities:[]
  };

  constructor(private Storage : Storage) { }

  ngOnInit(): void {

  }

  saveTodo(){
    let myToDo : Todo   = {text:this.message,status : 0}
    this.loadComponent  = false;
    this.isSaved        = true;
    this.myToDoList.activities.push(myToDo);
  }

  update(index){
    this.element        = index;
    this.loadComponent  = true;
  }

  fetchUpdate($event){
    this.myToDoList.activities[$event.id].text = $event.comment;
    console.log($event);
  }

}
