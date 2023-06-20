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
  weatherData: WeatherData = new WeatherData()
  currentUnits: string = 'metric';
  showCurrent: boolean = false;

  unitsList: string[] = ['metric', 'Imperial'];

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
    this.weatherService.GetCurrentWeather(newZip, units).subscribe(
      res => {
        this.weatherData.cityName = res.name;
        this.weatherData.description = res.weather[0].description;
        this.weatherData.currentTemperature= res.main.temp;
        this.weatherData.humidity = res.main.humidity;
        this.weatherData.windSpeed = res.wind.speed;
        this.weatherData.icon = res.weather[0].icon;
        this.showCurrent = true;
      }
    )
  }

  // this.subject.subscribe(res => {
  //   console.log("res - ", res);
  //   this.getWeather(res);
  // })
  // if (this.zip.length) {
  //   this.getWeather(zip);
  // }
    // console.log("this.weatherData - ", this.weatherData)
          //     this.forecastData = new ForecastData();//Instance to store the Data of ForecastModel
          //     this.forecastData.name = res.city.name;
          // for(var i=7; i<res.list.length;i=i+8)//Since we want for 5 days. it Jumps 8 times to get to next day.(A day had 8 details in API.)
          // {
          //   //Instance of type ForecastDetails and stores the data in it.
          //   var details = new ForecastDetails();
          //       details.date = res.list[i].dt_txt;
          //       details.maxTemperature = res.list[i].main.temp_max;
          //       details.minTemperature = res.list[i].main.temp_min;
          //       details.description = res.list[i].weather[0].description;
          //       details.icon = res.list[i].weather[0].icon;
          //       this.forecastData.details.push(details);//Pushing the data to the to created object
  
          // }
          // this.showCurrent = false;
          // this.showForecast = true;
}
