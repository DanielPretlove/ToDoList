import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoList } from 'src/app/interfaces/ToDoList';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public todolist: ToDoList = new ToDoList();

  constructor(
    public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoList,
    private dataService: DataService

  ) { }

  ngOnInit() {
  }

  DeleteTask() {
    this.dataService.DeleteToDoList(this.data.id).subscribe();
    this.dialogRef.close();
  }

  Cancel() {
    this.dialogRef.close();
  }
}
