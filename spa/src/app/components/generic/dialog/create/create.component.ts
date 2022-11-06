import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'create-dialog-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public todolist: ToDoList = new ToDoList();

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoList,
    private dataService: DataService

  ) { }

  ngOnInit() {
  
  }

  CreateNewTask() {
    this.dataService.CreateNewToDoList(this.data).subscribe();
    this.dialogRef.close();
  }

  Cancel() {
    this.dialogRef.close();
  }
}
// <mat-option value="Backend">Backend</mat-option>
// <mat-option value="Frontend">Frontend</mat-option>
// <mat-option value="Database">Database</mat-option>
// <mat-option value="Team Organization">Team organization</mat-option>