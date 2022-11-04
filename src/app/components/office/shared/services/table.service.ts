import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TableService {
  httpOptions: any;

  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json,',
        'X-CSCAPI-KEY': ''
      })
    }
  }

  getTable(): Observable<any> {
    return this.httpclient.get('http://188.72.108.212:8000/data', {headers: this.httpOptions.header})
  }
}