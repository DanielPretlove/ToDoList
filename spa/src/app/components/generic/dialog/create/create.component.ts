import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'create-dialog-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  todolists$: Observable<ToDoList> | undefined;
  public todolist: ToDoList = new ToDoList();

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoList,
    private dataService: DataService

  ) { }

  ngOnInit() {
  
  }

  

  CreateNewTask() {
    this.dataService.CreateNewToDoList(this.todolist).subscribe()
  }

  Cancel() {
    this.dialogRef.close();
  }

  public inputChange(value: string | number | undefined) {
    if (value === 'number') {
      value = parseInt(value as string);
    }
    this.valueChange.emit(value);
  }
}
