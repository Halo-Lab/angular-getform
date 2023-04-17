import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
}
