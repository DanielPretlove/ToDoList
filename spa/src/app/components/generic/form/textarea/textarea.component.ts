import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'textarea-component',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() form: NgForm | undefined;
  @Input() value: string  = '';
  @Input() name: string | undefined;
  @Input() required: boolean = false;
  @Input() rows: number = 1;

  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  public InputValue() : void {
    this.valueChange.emit(this.value);
  }
}