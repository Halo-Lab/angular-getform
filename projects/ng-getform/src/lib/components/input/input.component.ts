import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control!: FormControl;
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() type = 'text';
  @Input() multiRows = false;
  @Input() errorMessages: any;
  @Input() validate: boolean = false;

  @HostBinding('attr.class') @Input() className?: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.control, 'from input')
  }
}
