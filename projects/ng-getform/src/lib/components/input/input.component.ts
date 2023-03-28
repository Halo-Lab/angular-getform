import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputId = '';
  @Input() control: FormControl = new FormControl();
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() type = 'text';
  @Input() isSubmitted = false;
  @Input() multiRows = false;
  @Input() errorMessages: any;

  @HostBinding('attr.class') @Input() className?: string = '';


  constructor() { }

  ngOnInit(): void { }
}
