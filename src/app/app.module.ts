import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Checkbox, NgGetForm, Select, RadioGroup, Input, Button } from 'ng-getform';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgGetForm, Checkbox, Select, RadioGroup, Input, Button],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
