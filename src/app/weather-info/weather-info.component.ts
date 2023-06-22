import { Component, Input, SimpleChanges } from '@angular/core';
import { WeatherData } from '../models/currentWeather.model';
import { GetWeatherService } from '../services/get-weather.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  @Input() zip!: string;
  weatherData: WeatherData = new WeatherData();
  iconUrl: string = 'https://openweathermap.org/img/wn/';
  myDate = new Date();
  currentUnits: string = 'metric';
  showCurrent: boolean = false;
  showError: boolean = false;

  unitsList: string[] = ['metric', 'imperial'];

  constructor(private weatherService: GetWeatherService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // check if there are requests
    const latestRequest = changes['zip'];
    if (this.zip && latestRequest) {
      this.getWeather(this.zip, this.currentUnits);
    }
  }
  
  ngOninit(){
  }

  getWeather(newZip:string, units:string) {
    this.weatherData = { "cityName": "Lviv", "country": "UA", "description": "broken clouds", "currentTemperature": 25.01, "humidity": 71, "windSpeed": 2.15, "icon": "04d" };
    this.showCurrent = true;
  }
  // getWeather(newZip:string, units:string) {
  //   this.weatherService.GetCurrentWeather(newZip, units).subscribe(
  //     res => {
  //       this.weatherData.cityName = res.name;
  //       this.weatherData.country = res.sys.country;
  //       this.weatherData.description = res.weather[0].description;
  //       this.weatherData.currentTemperature= res.main.temp;
  //       this.weatherData.humidity = res.main.humidity;
  //       this.weatherData.windSpeed = res.wind.speed;
  //       this.weatherData.icon = res.weather[0].icon;
  //       this.showCurrent = true;
  //       this.showError = false;
  //     },
  //     error => {
  //       this.showError = true;
  //       console.log("error - ", error)
  //     }
  //   )
  // }
}
