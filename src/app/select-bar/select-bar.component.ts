import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { GetWeatherService } from '../services/get-weather.service';

interface City {
  zip: string;
  viewValue: string;
}

@Component({
  selector: 'select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent {
  @Output() currentWeatherInfo = new EventEmitter<any>();
  currentCity: string = '';

  constructor(private weatherService: GetWeatherService) { }

  cityList: City[] = [
    {zip: '03141', viewValue: 'Kyiv'},
    {zip: '79007', viewValue: 'Lviv'},
    {zip: '40031', viewValue: 'Sumy'},
    {zip: '49098', viewValue: 'Dnipro'},
  ];

  getWeather(zip:string) {
    if (this.currentCity != zip) {
      this.currentCity = zip;
      this.weatherService.GetCurrentWeather(zip).subscribe(
        res => this.currentWeatherInfo.emit(res)
      )
    }
  }
}
