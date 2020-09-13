import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  constructor(private http: HttpClient) { }
  
  getWorldStats(): Observable<any> {
    const url = 'https://covid19.mathdro.id/api';
    return this.http.get(url).pipe(catchError(err => {
        return throwError(err);
    }));
  }

  getIndiaStats(): Observable<any> {
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    return this.http.get(url).pipe(catchError(err => {
      return throwError(err);
    }));
  }
  getTopTen(): Observable<any> {
    const url = 'https://api.covid19api.com/summary';
    return this.http.get(url).pipe(catchError(err => {
      return throwError(err);
    }))
  }
}
