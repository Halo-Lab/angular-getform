import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-unvalid-icon',
  templateUrl: './unvalid-icon.component.html',
  styleUrls: ['./unvalid-icon.component.scss']
})
export class UnvalidIconComponent {
  @Input() errorMessages!: any;
  @Input() errors!: any;
}
