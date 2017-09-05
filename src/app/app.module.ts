import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {MdButtonModule,MdTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TableBasicExample } from './tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    MdButtonModule,
    MdTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
