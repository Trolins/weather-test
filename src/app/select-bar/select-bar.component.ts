import { Component, Input, Output, EventEmitter  } from '@angular/core';

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
  @Output() currentZip = new EventEmitter<any>();
  currentCity: string = '';

  constructor() { }

  cityList: City[] = [
    {zip: '03141', viewValue: 'Kyiv'},
    {zip: '79007', viewValue: 'Lviv'},
    {zip: '40031', viewValue: 'Sumy'},
    {zip: '49098', viewValue: 'Dnipro'},
    {zip: '76002', viewValue: 'Ivano-Frankivsk'},
  ];

  selectCity(zip:string) {
    if (this.currentCity != zip) {
      this.currentCity = zip;
      this.currentZip.emit(zip)
    }
  }
}
