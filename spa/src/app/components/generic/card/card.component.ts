import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ToDoList } from 'src/app/interfaces/ToDoList';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() todolist: ToDoList = new ToDoList();

  constructor(
  ) {

   }

  ngOnInit() {
  }
}

// Card should generic components that allows the user to 