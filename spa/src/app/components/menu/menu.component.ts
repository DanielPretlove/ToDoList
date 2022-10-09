import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() showCreateButton = false;
  @Input() showEditButton = false;
  @Input() showDeleteButton = false;
  constructor() { }

  ngOnInit() {
  }

}
