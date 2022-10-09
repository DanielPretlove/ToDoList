import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IToDoList } from 'src/app/interfaces/IToDoList';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() todolist: IToDoList | undefined;

  constructor() {
   }

  ngOnInit() {
    console.log(this.todolist?.Type)
  }


}



// Card should generic components that allows the user to 