import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationType } from '../../types';
import { getErrorMessages } from '../../helpers';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() searchEnabled?: boolean = true;
  @Input() options: string[] = [];
  @Input() control: FormControl = new FormControl();
  @Input() validator?: ValidationType[];

  isActive: boolean = false;
  searchString = new FormControl('');
  filteredOptions: string[] = [];
  defaultTitle: string = 'Default title ...'
  errorMessage!: {};

  @HostBinding('attr.class') @Input() className?: string = '';
  @HostListener('window:click', ['$event.target'])
  closeDropdownOnMissClick(event: HTMLElement) {
    if (!event.classList.contains('select-wrapper')) this.isActive = false;
  }

  constructor() { }

  ngOnInit(): void {
    if (this.validator) {
      this.errorMessage = getErrorMessages(this.validator)
      console.log(this.errorMessage)
      // this.control.setValidators(Validators.requiredTrue);
    }
    this.filteredOptions = [...this.options];
  }

  searchInputHandle() {
    this.filteredOptions = this.options.filter(el =>
      el.toLowerCase().includes((this.searchString.value as string).toLowerCase()));
  }

  searchClickHandle(event: Event) {
    event?.stopPropagation()
  }

  changeValue(value: string | number) {
    this.control?.setValue(value)
  }

  toggleDropdown() {
    this.isActive = !this.isActive;
  }
}
