import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IToDoList } from 'src/app/interfaces/IToDoList';

@Component({
  selector: 'create-dialog-component',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() showCreateButton = false;
  @Input() dialogState = false;
  
  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IToDoList,

  ) { }

  ngOnInit() {
  
  }
  

  CreateNewTask() {
    console.log("GAYYYYYYY")
  }

}
