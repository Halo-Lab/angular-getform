import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  validate: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  endableFormValidation() {
    this.validate.next(true)
  }

  disableFormValidation() {
    this.validate.next(false);
  }
}
