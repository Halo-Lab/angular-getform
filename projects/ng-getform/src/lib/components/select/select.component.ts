import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() errorMessages: any;
  @Input() validate: boolean = false;

  isActive: boolean = false;
  searchString = new FormControl('');
  filteredOptions: string[] = []

  @HostBinding('attr.class') @Input() className?: string = '';
  @HostListener('window:click', ['$event.target'])
  closeDropdownOnMissClick(event: HTMLElement) {
    if (!event.classList.contains('select-wrapper')) this.isActive = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.control.setValue('Default option ...');
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
