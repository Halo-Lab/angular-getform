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

| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| btnLabel| `string` | required | Text inside button |
| btnType | `string` | optional | Type of button ('filled' or 'stroke'). Also can be 'wide' ( width : 100%). Default value - 'filled' |
| className | `string` |  optional | Class name for custom styling|

You can add events listeners directly on `<lib-button>` component.

### Input accepts parameters

| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| control | [`FormControl`](https://angular.io/api/forms/FormControl)  | required  | Variable which control input value (new FormControl(yourValue : string)). Actually you can use all methods that are avalilable with [Angular FormControl](https://angular.io/api/forms/FormControl) |
| inputId | `string or number` | required |  Unique ID of an input field |
| label| `string` | optional | The label of an input|
| placeholder | `string` | optional | Input placeholder (by default equal to `label`)|
| validator | `{type: string, message: string, value?: string or number}[]` | optional | Array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: for max, min, maxLength, minLength, pattern validators}. Validator's types may be: `required`, `email` , `number` , `maxLength`, `minLength`, `max`, `min`, `pattern`. For example: `[ { type: 'required', message: 'Required field' },{ type: 'minLength', message: 'At least 2 characters', value: 2 },{ type: 'pattern', message: 'Only letters', value: '[a-zA-Z]+' }]`|
| multiRows| ` boolean` | optional | When equal true, will be rendered `<textarea>`, otherwise a `<input>`|
| type | `string` | optional |  Input type (default 'text')|
| className | `string` | optional | Class name for custom styling|


### Checkbox accepts parameters

| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| name | `string`| required |  The name of an checkbox field |
| label |`string`  | required | The label of an checkbox|
| control | [`FormControl`](https://angular.io/api/forms/FormControl)   | required | Variable which control checkbox value (new FormControl(yourValue : boolean)). Actually you can use all methods that are avalilable with [Angular FormControl](https://angular.io/api/forms/FormControl). |
| validator |`{type: string, message: string, value?: string or number}[]`  | optional | Array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: string or number}. The validator's name may be: `requiredTrue`. For example: `[{name: "requiredTrue", message: "Please accept our terms"}]`.|
| className | `string` | optional | Class name for custom styling|

## RadioGroup accepts parameters

| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| name | `string`| required | The name of an radio group input |
| label |`string` | required | he label of an radio group|
| items | `{name:string,value:string}[]` | required | Array of options  |
| required | [`FormControl`](https://angular.io/api/forms/FormControl)   | required | Variable which control radio group value (new FormControl(yourValue : string or number)). Actually you can use all methods that are avalilable with [Angular FormControl](https://angular.io/api/forms/FormControl). |
| validator |`{type: string, message: string, value?: string or number}[]` | optional | Array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: string or number}. The validator's name may be: `required`. For example: `[{name: "required", message: "You must select one option"}]`.|
| orientation |`string (vertical or horizontal)` |  optional | Property that allow you to control buttons group orientation. Default value : vertical|
| className | `string` | optional | Class name for custom styling|

## Select accepts parameters

| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| placeholder| `string`| required | Question before select component |
| options | `string[]` | required | Array of options|
| control | [`FormControl`](https://angular.io/api/forms/FormControl)   | required | Variable which control radio group value (new FormControl(yourValue : string)). Actually you can use all methods that are avalilable with [Angular FormControl](https://angular.io/api/forms/FormControl). |
| validator |`{type: string, message: string, value?: string or number}[]` | optional | Array of objects in the form of {type: validation type , message: text for unvalid tooltip, value?: string or number}. The validator's name may be: `required`. For example: `[{name: "required", message: "Please select your favourite fruit"}]`.|
| searchEnabled | `boolean` | optional |  Enable/disable search bar for select options|
| className | `string` | optional | Class name for custom styling|

### NgGetform accepts parameters
| Property | Type  | Necessity | Description |
| :-- | :-- | :-- | :----- |
| targetUrl | `string`| required | The url of your endpoint on getform |
| formGroup |[`FormGroup`](https://angular.io/api/forms/FormGroup) | required | A [FormGroup](https://angular.io/api/forms/FormGroup) aggregates the values of each child FormControl into one object, with each control name as the key. It calculates its status by reducing the status values of its children.|
| successCallback | `Function` | optional |  Function that will be called after successful submission of the form data on getform.io|
| className | `string` | optional | Class name for custom form styling|

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
import { NgGetform, Input , Button, Checkbox, Select, RadioGroup } from '@halo-lab/ng-getform'

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
