import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() Placeholder: string = ''
  @Input() value: string | number | undefined;
  @Input() required: boolean = false;
  @Input() name: string | undefined;
  @Input() type: 'string' | 'number' = 'string'
  @Input() form: NgForm | undefined;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public inputChange() {
    if (this.value === 'number') {
      this.value = parseInt(this.value as string);
    }
    this.valueChange.emit(this.value);
  }

}
