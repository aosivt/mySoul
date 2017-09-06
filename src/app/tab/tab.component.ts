import {Component,Injectable} from '@angular/core';
import { Jsonp, URLSearchParams, Http, Response } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-tab',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  {position: 21, name: 'того', weight: 555, symbol: 'ЕЕЕЕ'},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
private http: Http;
private apiURL = 'http://localhost:8080/test?test=1';

getData(){
  return this.http.get(this.apiURL)
  .map((res: Response)=>res.json);
}
getContacts(){
  this.getData().subscribe(data=>{
    console.log(data);
  });
}

  /** Connect function called by the table to retrieve one stream containing the data to render. */

  checkAddDataTemp(checkData:Element[]):Element[] {
    checkData.push({position: 1, name: 'Ну вот вроде как получилось)))', weight: 555, symbol: 'ЕЕЕЕ'},);
    return checkData;
  }
  checkAddTestObjectFromService(checkData:Element[]):Element[] {
    checkData.push(this.getData());
    this.getContacts();
    return checkData;
  }

  connect(): Observable<Element[]> {
    var dataTemp:Element[];
    dataTemp = data;
    dataTemp = this.checkAddDataTemp(dataTemp);
    dataTemp = this.checkAddDataTemp(dataTemp);
    dataTemp.push({position: 0, name: 'ого', weight: 555, symbol: 'ЕЕЕЕ'},);
    return Observable.of(dataTemp);
  }

  disconnect() {}
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
