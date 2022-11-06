import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value: string | number | undefined;
  @Input() form: NgForm | undefined;
  @Input() required: boolean = false;
  @Input() name: string | undefined;
  @Input() disabled: boolean = false;
  @Input() type: 'string' | 'number' = 'string'

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  public inputChange(): void {
    if(this.type == 'number') {
      this.value = parseInt(this.value as string);
    }
    this.valueChange.emit(this.value);
    console.log(this.value);
  }
}
