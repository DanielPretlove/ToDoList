import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public todolist: ToDoList = new ToDoList();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoList,
    private dataService: DataService
) { }

  ngOnInit() {
  }

  
  EditTask() {
    this.dataService.UpdateToDoList(this.todolist).subscribe()
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
