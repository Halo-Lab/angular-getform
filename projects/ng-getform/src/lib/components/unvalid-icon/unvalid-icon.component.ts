import { Component, Input, HostListener } from '@angular/core';
import { TooltipPosition } from '../tooltip/tooltip.enums';

@Component({
  selector: 'lib-unvalid-icon',
  templateUrl: './unvalid-icon.component.html',
  styleUrls: ['./unvalid-icon.component.scss']
})
export class UnvalidIconComponent {
  @Input() errorMessage!: any;
  @Input() errors!: any;

  TooltipPosition: typeof TooltipPosition = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = '';

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    this.x = $event.clientX;
    this.y = $event.clientY;
    this.coordinates = `${this.x},${this.y}`;
  }
}
