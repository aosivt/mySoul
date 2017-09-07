import {Component, Inject,Injectable} from '@angular/core';
import { Jsonp, URLSearchParams, Http, Response,Headers, RequestOptions } from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

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
                      // .map((res:Response) =>
                      // res.json()
                    // );
  }
}

export class TestObjectService {
    constructor(
        public position: number,
        public name:     string,
        public weight:   number,
        public symbol:   string
        ){}
}
