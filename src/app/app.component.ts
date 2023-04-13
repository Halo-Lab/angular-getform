import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nameInputControl: FormControl = new FormControl(null, [Validators.required,
  Validators.minLength(2),
  Validators.pattern('[a-zA-Z]+')]);
  emailInputControl: FormControl = new FormControl(null, [Validators.required,
  Validators.minLength(2)]);
  favouriteFruitControl: FormControl = new FormControl(null, [Validators.required])
  radioItemControl: FormControl = new FormControl(null, [Validators.required])
  confirmationControl: FormControl = new FormControl(false, [Validators.requiredTrue])
  // formGroup: FormGroup = new FormGroup({
  //   name: new FormControl(null,
  //     [Validators.required,
  //     Validators.minLength(2),
  //     Validators.pattern('[a-zA-Z]+')]),
  //   email: new FormControl(null,
  //     [Validators.required,
  //     Validators.email]),
  //   favouriteFruit: new FormControl(null, [Validators.required]),
  //   selectedRadioItem: new FormControl(null, [Validators.required]),
  //   confirmation: new FormControl(false, [Validators.requiredTrue])
  // })
  callback() {
    console.log('hello from callback');
  }
  validate: boolean = false;
  validateInputs() {
    this.validate = !this.validate;
  }

  fruitsArr: string[] = ['Banana',
    'Mango',
    'Pear',
    'Apple',
    'Orange'
  ];
  radioButtonsArray: { name: string, value: string }[] =
    [{ name: 'radio 1', value: 'radio-1' },
    { name: 'radio 2', value: 'radio-2' },
    { name: 'radio 3', value: 'radio-3' },
    { name: 'radio 4', value: 'radio-4 ' }]

  // fieldList: any = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     label: 'Your first name',
  //     validation: [
  //       {
  //         type: 'required',
  //         value: true,
  //         errorMessage: 'Required field',
  //       },
  //       {
  //         type: 'minLength',
  //         value: 2,
  //         errorMessage: 'At least 2 characters',
  //       },
  //       {
  //         type: 'pattern',
  //         value: '[a-zA-Z]+',
  //         errorMessage: 'Only letters',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'text',
  //     name: 'lastName',
  //     label: 'Your last name',
  //     validation: [
  //       {
  //         type: 'required',
  //         value: true,
  //         errorMessage: 'Required field',
  //       },
  //       {
  //         type: 'minLength',
  //         value: 2,
  //         errorMessage: 'At least 2 characters',
  //       },
  //       {
  //         type: 'pattern',
  //         value: '[a-zA-Z]+',
  //         errorMessage: 'Only letters',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'radio',
  //     orientation: 'horizontal',
  //     label: 'What is your gender?',
  //     name: 'gender',
  //     options: [{ name: 'male', value: 'male' },
  //     { name: 'female', value: 'female' },
  //     { name: 'transgender', value: 'transgender' },
  //     { name: 'gender-neutral', value: 'gender neutral' },
  //     { name: 'non-binary', value: 'non-binary' },
  //     { name: 'pangender', value: 'pangender' },
  //     { name: 'genderqueer', value: 'genderqueer' },],
  //     validation: [
  //       {
  //         type: 'required',
  //         value: true,
  //         errorMessage: 'Select your gender!',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'radio',
  //     orientation: 'vertical',
  //     label: 'Choose your favourite sport',
  //     name: 'sport',
  //     options: [{ name: 'soccer', value: 'soccer' },
  //     { name: 'hockey', value: 'hockey' },
  //     { name: 'tenis', value: 'tenis' },
  //     { name: 'basketball', value: 'basketball' },
  //     { name: 'formula 1', value: 'formula-1' }],
  //     validation: [
  //       {
  //         type: 'required',
  //         value: true,
  //         errorMessage: 'Selection required',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'select',
  //     placeholder: 'Choose your favourite fruit',
  //     name: 'fruit',
  //     options: ['Banana',
  //       'Mango',
  //       'Pear',
  //       'Apple',
  //       'Orange',
  //       'Lemon',
  //       'Watermelon'
  //     ],
  //     validation: [
  //       {
  //         type: 'required',
  //         errorMessage: 'Selection required',
  //       },
  //     ],
  //   },
  //   {
  //     type: 'checkbox',
  //     label: 'Are you sure about that?',
  //     name: 'confirmation',
  //     validation: [
  //       {
  //         type: 'requiredTrue',
  //         errorMessage: 'Confirmation required',
  //       },
  //     ],
  //   },
  // ];
}
