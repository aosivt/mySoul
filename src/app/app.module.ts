import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {MdButtonModule,MdTableModule,MdInput} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableBasicExample } from './tab/tab.component';
import { TableFilteringExample } from './tabFilter/tableFilteringExample.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFilteringExample,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdInput,
    MdTableModule

  ],
  providers: [],
  bootstrap: [AppComponent,TableBasicExample,TableFilteringExample]
})
export class AppModule { }
