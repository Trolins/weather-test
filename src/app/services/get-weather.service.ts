import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  APIkey = 'd41064eb03fb5126cd558ec4df2fbfb3';
  URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  GetCurrentWeather(zip: string, units: string): Observable<any> {
    return this.http.get(this.URL+zip+",UA&appid="+this.APIkey+"&units="+units );
  }
}

// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}