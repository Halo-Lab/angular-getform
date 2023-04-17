import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from './tooltip.enums';

@Component({
  selector: 'lib-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;

  constructor() {}

  ngOnInit(): void {}
}
