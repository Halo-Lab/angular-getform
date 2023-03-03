# @halo/angular-getform

### To install package

```sh
npm install @halo/angular-getform
```

### To use the form in the component

- import Form component

```sh
import { AngularGetformModule } from '@halo/angular-getform';
```

- add imported module to imports in main component

```sh
imports: [AngularGetformModule]
```

- use component in template

```sh
<lib-angular-getform></lib-angular-getform>
```

### Form accepts parameters

- required `[targetUrl]` (the url of your form on getform)
- required `[fields]` (list of fields that must be in the form)
- optional `[btnLabel]` - label on the button (default "Send form")
- optional `[successCallback]` - function that will be called after successful submission of the form data on getform.io

### Parameters types

- `targetUrl`: `string`
- `fields`: `array`

```sh
    name: string
    type?: string (default 'text')
    label?: string
    placeholder?: string (default equal 'label')
    isMultiLine?: boolean (if true, will be rendered '<textarea></textarea>', otherwise a '<input />')
    validations?: {
        errorMessage: string
        type: string (allowed 'required' | 'email' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern')
        value: string | number | boolean
    }[]
```

- `btnLabel`: `string`
- `successCallback`: `() => void`

### 'fields' parameter examples

```sh
  {
    name: string
    type?: string (default 'text')
    label?: string
    placeholder?: string (default equal 'label')
    isMultiLine?: boolean (if true, will be rendered '<textarea></textarea>', otherwise a '<input />')
    validations?: {
        errorMessage: string
        type: string (allowed 'required' | 'email' | 'minLength' | 'maxLength' | 'min' | 'max' | 'pattern')
        value: string | number | boolean
    }[]
  }
```

```sh
type: 'number',
name: 'age',
label: 'Your age',
placeholder: 'Age'
validations: [
    {
        type: 'min',
        value: 18,
        errorMessage: 'The minimum age is not reached',
    },
]
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
