import {Component, Inject,Injectable} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Jsonp, URLSearchParams, Http, Response,Headers, RequestOptions } from '@angular/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-test-dialog',
  templateUrl: 'dialog-overview-example.html'

})



export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MdDialog
    ,
  private  testService: TestService
) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: { name: this.name, animal: this.animal }
    });


      this.testService.getComments().subscribe(resultService=>{
      console.log(resultService);
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
