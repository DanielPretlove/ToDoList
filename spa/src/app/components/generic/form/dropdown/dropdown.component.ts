import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() Placeholder: string = ''
  @Input() name: string | undefined;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() value: string | undefined;
  @Input() form: NgForm | undefined;

  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public changeSelector() {
    if (this.value) {
      this.valueChange.emit(this.value);
    }

    console.log(this.value);
  }

}
