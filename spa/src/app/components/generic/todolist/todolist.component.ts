import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'todolist-component',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolists$: Observable<ToDoList[]> | undefined;
  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadToDoList();
  }

  loadToDoList() {
    this.todolists$ = this.dataService.getTodoList();
  }
}
