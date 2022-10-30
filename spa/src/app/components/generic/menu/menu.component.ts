import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';
import { CreateComponent } from '../dialog/create/create.component';
import { DeleteComponent } from '../dialog/delete/delete.component';
import { EditComponent } from '../dialog/edit/edit.component';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() showCreateButton = false;
  @Input() showEditButton = false;
  @Input() showDeleteButton = false;
  @Input() Toggle = false;

  public todolist: ToDoList = new ToDoList();

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
  }

  Create() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '1000px',
      height: '500px',
      data: {todolist: this.todolist},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  Edit() {
    this.dataService.getTodoListById(this.todolist.id)?.subscribe((data: ToDoList) => {
      const dialogRef = this.dialog.open(EditComponent, {
        width: '1000px',
        height: '500px',
        data: {todolist: this.todolist},
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    })
    
  }

  Delete() {
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '1000px',
      height: '500px',
      data: {todolist: this.todolist},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
