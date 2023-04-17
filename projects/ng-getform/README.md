# @halo-lab/ng-getform

### To install package

```sh
npm install @halo-lab/ng-getform
```

### To use the components

```sh
import { NgGetform, Input , Button, Checkbox, Select, RadioGroup } from '@halo-lab/ng-getform';

```
- add imported component to imports in your component

```sh
  imports: [ NgGetForm, Input, Button, Checkbox, Select, RadioGroup]
```

### Button accepts parameters

- required `btnLabel : string` text inside button;
- optional `btnType : string ('filled' or 'stroke')` type of button (also can be 'wide' ( width : 100%));
- optional `className : string` class name for custom styling;

You can add events listeners directly on `<lib-button>` component.

### Input accepts parameters

- required `control : FormControl` variable to control input  value (new FormControl(yourValue : string)). Actually you can use all the methods that are avalilable with [FormControl](https://angular.io/api/forms/FormControl).
- required `inputId` unique name of an input field;
- optional `label : string` the label of an input;
- optional `placeholder : string` input placeholder (by default equal to `label`);
- optional `validator : { type: string, message: string, value?: string | number }[]`  - the array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: for max, min, maxLength, minLength, pattern validators}. 
   Validator's types may be:
    - `required`,
    - `email`,
    - `number`,
    - `maxLength`,
    - `minLength`,
    - `max`,
    - `min`,
    - `pattern`,
    For example: `[
        { type: 'required', message: 'Required field' },
        { type: 'minLength', message: 'At least 2 characters', value: 2 },
        { type: 'pattern', message: 'Only letters', value: '[a-zA-Z]+' }`.
- optional `multiRows : boolean` if equal true, will be rendered '<textarea>', otherwise a '<input />';
- optional `type : string` input type (default 'text');
- optional `className : string`  class name for custom styling.

### Checkbox accepts parameters

- required `name : string` the name of an checkbox field;
- required `label : string` the label of an checkbox;
- required `control : FormControl` variable to control checkbox value (new FormControl(yourValue : boolean)). Actually you can use all the methods that are avalilable with [FormControl](https://angular.io/api/forms/FormControl).
- optional `validator : { type: string, message: string, value?: string | number }[]` - the array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: for max, min, maxLength, minLength, pattern validators}. The validator's name may be:
  - requiredTrue.
  For example: `[{name: "requiredTrue", message: "Please accept our terms"}]`.
- optional `className : string` class name for custom styling.

## RadioGroup accepts parameters

- required `name : string` the name of an radio group input;
- required `label : string` the label of an radio group;
- required `items : {name:string,value:string[]` the label of an radio group;
- required `control : FormControl`  variable to control radio group value (new FormControl(yourValue : string | number));
- optional `validator : { type: string, message: string, value?: string | number }[]` - the array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: for max, min, maxLength, minLength, pattern validators}. The validator's name may be:
  - required.
  For example: `[{name: "required", message: "You must select one option"}`].
- optional `orientation? : (vertical | horizontal )` property that allow you to control buttons group orientation. Default value : vertical;
- optional `className : string` class name for custom styling.

## Select accepts parameters

- required `question : string` question before select component;
- required `options : string[]` array of options;
- required `control : FormControl` variable to control select value (new FormControl(yourValue : string));
- optional `validator : { type: string, message: string, value?: string | number }[]` - the array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: for max, min, maxLength, minLength, pattern validators}. The validator's name may be:
  - required.
  For example: `[{name: "required", message: "Please select your favourite fruit"}]`.
- optional `searchEnabled : boolean` enable/disable search bar for select options;
- optional `className : string` class name for custom styling.

### NgGetform accepts parameters

- required `targetUrl` the url of your form on getform;
- required `formGroup` A [FormGroup](https://angular.io/api/forms/FormGroup) aggregates the values of each child FormControl into one object, with each control name as the key. It calculates its status by reducing the status values of its children. 
- optional `successCallback` function that will be called after successful submission of the form data on getform.io.

### Example of usage
#### HTML 
```sh
  <lib-ng-getform
    [targetUrl]="'https://getform.io/your-getform-id'"
    [formGroup]="formGroup"
    [successCallback]="callback"
  >
    <lib-input
      [label]="'Name'"
      [placeholder]="'Please write your name'"
      [control]="formGroup.controls['name']"
      [validator]="[
        { type: 'required', message: 'Required field' },
        { type: 'minLength', message: 'At least 2 characters', value: 2 },
        { type: 'pattern', message: 'Only letters', value: '[a-zA-Z]+' }
      ]"
    ></lib-input>
    <lib-input
      [label]="'E-mail'"
      [placeholder]="'Please write your email'"
      [control]="formGroup.controls['email']"
      [validator]="[
        { type: 'required', message: 'Required field' },
        { type: 'email', message: 'Unvalid e-mail' }
      ]"
    ></lib-input>
    <lib-radio-group
      [label]="'Choose your favourite sport'"
      [orientation]="'vertical'"
      [items]="sportsOptions"
      [control]="formGroup.controls['sport']"
      [validator]="[
        { type: 'required', message: 'You need to select option!' }
      ]"
    ></lib-radio-group>
    <lib-select
      [placeholder]="'Choose your favourite fruit'"
      [searchEnabled]="true"
      [options]="fruitsArr"
      [control]="formGroup.controls['fruit']"
      [validator]="[{ type: 'required', message: 'Select one fruit!' }]"
    ></lib-select>
    <lib-checkbox
      [name]="'confirmation'"
      [label]="'Are you sure about that?'"
      [control]="formGroup.controls['confirmation']"
      [validator]="[{ type: 'requiredTrue', message: 'Must be checked' }]"
    ></lib-checkbox>
    <lib-button [btnLabel]="'Send Form'" [btnType]="'wide filled'"></lib-button>
  </lib-ng-getform>
```
#### TS
```sh
import { FormControl, FormGroup } from '@angular/forms';

formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    fruit: new FormControl(null),
    sport: new FormControl(null),
    confirmation: new FormControl(false)
  })

  sportsOptions: { name: string, value: string }[] =
    [{ name: 'soccer', value: 'soccer' },
    { name: 'hockey', value: 'hockey' },
    { name: 'tenis', value: 'tenis' },
    { name: 'basketball', value: 'basketball' },
    { name: 'formula 1', value: 'formula-1' }];
  fruitsArr: string[] = ['Banana',
    'Mango',
    'Pear',
    'Apple',
    'Orange'
  ];

  callback() {
    console.log('hello from callback');
  }

```

## Word from author

Have fun ✌️

<a href="https://www.halo-lab.com/?utm_source=github">
  <img
    src="https://dgestran.sirv.com/Images/supported-by-halolab.png"
    alt="Supported by Halo lab"
    height="60"
  >
</a>
