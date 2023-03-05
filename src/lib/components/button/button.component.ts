import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnLabel?: string = 'Send form';
  @Input() disabled?: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
