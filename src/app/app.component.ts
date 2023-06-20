import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-test';
  currentWeatherInfo : any;
  sendCurrentWeatherFnc($event : any) { this.currentWeatherInfo = $event; }
}
