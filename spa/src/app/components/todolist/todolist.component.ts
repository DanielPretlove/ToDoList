import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDoList } from 'src/app/interfaces/IToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'todolist-component',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolists$: Observable<IToDoList[]> | undefined;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadToDoList();
  }

  loadToDoList() {
    this.todolists$ = this.dataService.getTodoList();
  }
}
