import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  private Url = 'http://localhost:8080';

  /* 
 Submit the route
   */

  submitRoute(origin: string, destination: string): Observable<any> {
    let route = "/route";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.Url + route, { origin, destination }, options)
      .map(this.extractData)
      .catch(this.handleError);
  }
  /* 
 Get the coordinate
   */

  getRoute(token: string): Observable<any> {
    let route = "/route/" + token;
    return this.http.get(this.Url + route)
      .map(this.extractData)
      .catch(this.handleError);
  }
 /* 
 Return response as a Json
  */

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
 /* 
Handle errors and return an Error Message
  */

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
