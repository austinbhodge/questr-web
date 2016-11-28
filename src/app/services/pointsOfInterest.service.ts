import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PointsOfInterestService {
  constructor(private http: Http) { }

  getParks() {
    let revb = 'http://gis.data.vbgov.com/datasets/4ee34e8a8aea431ea329743a71c2fd61_7.geojson';
    return this.http.get(revb)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body;
    if (res.text()) {
      body = res.json();
    }
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
