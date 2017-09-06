import {  BrowserModule }           from '@angular/platform-browser';
import {  FormsModule }             from '@angular/forms';
import {
          NgModule }                from '@angular/core';
import {  DataSource}               from '@angular/cdk/collections';
import {  Observable}               from 'rxjs/Observable';
import {  BehaviorSubject}          from 'rxjs/BehaviorSubject';
import {
          MdButtonModule,
          MdTableModule,
          MdCheckboxModule,
          MdTabsModule,
          MdInputModule,
          MdSortModule,
          MdDialogModule
      }                             from '@angular/material';
import {TestService}                from "./dialog/dialog.component";
import {  HttpModule  }             from '@angular/http';
import {  BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {  AppComponent }            from './app.component';
import {  TableBasicExample }       from './tab/tab.component';
import {  TableFilteringExample }   from './tabFilter/tableFilteringExample.component';
import {  TableSortingExample }     from './tabSort/tableSort.component';
import {
          DialogOverviewExample,
          DialogOverviewExampleDialog
                                  } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFilteringExample,
    TableSortingExample,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    MdDialogModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdTabsModule,
    MdSortModule,
    MdTableModule
  ],
  providers: [TestService],
  bootstrap: [
    AppComponent,
    TableBasicExample,
    TableFilteringExample,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    TableSortingExample
  ]
})
export class AppModule { }
