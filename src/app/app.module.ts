import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavigationComponent]
})
export class AppModule { }
