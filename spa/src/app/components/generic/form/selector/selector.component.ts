import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'selector-component',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() disabled: boolean = false;
  @Input() additionalItems: Array<any> = [];
  @Input() value: string | undefined;
  @Input() required: boolean = false;
  @Input() form: NgForm | undefined;
  @Input() name: string | undefined;
  @Output() valueChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public InputValue() : void {
    this.valueChange.emit(this.value);
  }
}
