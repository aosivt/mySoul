import {Component, Inject,Injectable} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { Jsonp, URLSearchParams, Http, Response,Headers, RequestOptions } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-test-dialog',
  templateUrl: 'dialog-overview-example.html'
})

export class TestObjectService {
    constructor(
        public position: number,
        public name:     string,
        public weight:   number,
        public symbol:   string
        ){}
}

export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '450px',
      data: { name: this.name, animal: this.animal }
    });

    let testService = new TestService(new Http());
      testService.getComments().subscribe(resultService=>{
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

@Injectable()
export class TestService {
  // constructor(private jsonp: Jsonp) { }

  public constructor(private http: Http) {

  }
  private apiURL = 'http://192.168.0.3:8080/test';

  getComments() : Observable<TestObjectService[]> {

      // ...using get request
      return this.http.get('http://192.168.0.3:8080/test')
                     // ...and calling .json() on the response to return data
                      .map((res:Response) => res.json());


  }
}
