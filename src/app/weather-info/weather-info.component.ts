import { Component, Input, SimpleChanges } from '@angular/core';
import { WeatherData } from '../models/currentWeather.model';
import { GetWeatherService } from '../services/get-weather.service';
import {MatDialog} from '@angular/material/dialog';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  @Input() zip!: string;
  weatherData: WeatherData = new WeatherData();
  iconUrl: string = 'https://openweathermap.org/img/wn/';
  isLoad: boolean = false;
  myDate = new Date();
  currentUnits: string = 'metric';
  showCurrent: boolean = false;
  showError: boolean = false;

  unitsList: string[] = ['metric', 'imperial'];

  constructor(
    private weatherService: GetWeatherService,
    public dialog: MatDialog,
    ) { }

  //check new city, and load new info
  ngOnChanges(changes: SimpleChanges): void {
    const latestRequest = changes['zip'];
    if (this.zip && latestRequest) {
      this.getWeather(this.zip, this.currentUnits);
    }
  }
  
  //get data from OpenWeather api
  getWeather(newZip:string, units:string) {
    this.isLoad = true;
    this.weatherService.GetCurrentWeather(newZip, units).subscribe(
      res => {
        this.weatherData.cityName = res.name;
        this.weatherData.country = res.sys.country;
        this.weatherData.description = res.weather[0].description;
        this.weatherData.currentTemperature= res.main.temp;
        this.weatherData.feels_like= res.main.feels_like;
        this.weatherData.humidity = res.main.humidity;
        this.weatherData.windSpeed = res.wind.speed;
        this.weatherData.pressure = res.main.pressure;
        this.weatherData.visibility = res.visibility;
        this.weatherData.icon = res.weather[0].icon;
        this.showCurrent = true;
        this.showError = false;
        this.isLoad = false;
      },
      error => {
        //Open error dialog with data
        this.showError = true;
        this.isLoad = false;
        this.openDialog(error);
      }
    )
  }

  //Open dialog fnc
  openDialog(data:HttpErrorResponse): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '350px',
      data: data
    });
  }
}
