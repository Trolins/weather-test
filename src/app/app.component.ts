import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-test';
  currentZipInfo!: string;
  sendCurrentZipFnc($event : any) { this.currentZipInfo = $event; }
}
