import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'textarea-component',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() Placeholder: string = ''
  @Input() value: string | number | undefined;
  @Input() required: boolean = false;
  @Input() name: string | undefined;
  @Input() form: NgForm | undefined;
  @Input() rows: number = 1;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  public InputValue(value: string) {
    this.valueChange.emit(value);
  }
}
