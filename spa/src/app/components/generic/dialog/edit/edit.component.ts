import { ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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

  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoList,
    private dataService: DataService,
    private changeDetectorRefs: ChangeDetectorRef

) { }

  ngOnInit() {
    this.dataService.getTodoList();
    this.changeDetectorRefs.detectChanges();
  }

  
  public EditTask() {
    if (this.data.Completed >= 0) {
      this.dataService.UpdateToDoList(this.data.id, this.data).subscribe();
      this.dialogRef.close();
    } else {
      console.log("invalid completion");
    }
  }


  Cancel() {
    this.dialogRef.close();
  }

}
