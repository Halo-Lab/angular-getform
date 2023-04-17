import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnLabel: string = '';
  @Input() btnType: string = 'filled';
  @Input() disabled?: boolean = false;

  @HostBinding('attr.class') @Input() className?: string = '';

  constructor() { }

  ngOnInit(): void { }
}
