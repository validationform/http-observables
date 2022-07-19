import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  API_KEY = 'a8d0095098bc4221ba094113221807';

  constructor(private http: HttpClient) {
    console.log('Weather Service ====');
  }

  getWeather(city: string): Observable<Weather> {
    return this.http
      .get<Weather>(
        `https://api.weatherapi.com/v1/current.json?key=
                     ${this.API_KEY}&q=${city}&aqi=no`
      )
      .pipe(catchError(this.errorHandle));
  }

  errorHandle(error: HttpErrorResponse) {
    console.log('error ==>' + error);
    return throwError(error.message || 'Server Error');
  }
}
