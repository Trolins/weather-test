import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  APIkey = '11111';
  URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http: HttpClient) { }

  GetCurrentWeather(zip: any): Observable<any> {
    return this.http.get(this.URL+zip+",ua&appid="+this.APIkey );
  }
}
