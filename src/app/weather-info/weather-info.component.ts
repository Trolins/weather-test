import { Component, Input } from '@angular/core';


@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent {
  @Input() weatherInfo = '';
  
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
