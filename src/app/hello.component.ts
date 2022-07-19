import { Component, Input, OnInit } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'hello',
  template: `<h1>It's currently {{ city }} {{ temparture }} {{ measurement }}</h1>
 
    <p>Start editing to see some magic happen :)</p>

    <input
      type="text"
      [(ngModel)]="city"
      placeholder="Enter The City Name"
    /><br /><br />

    <select [(ngModel)]="chooseData" (ngModelChange)="select()">
      <option value="celsius">Celsius</option>
      <option value="fahrenheit">Fahrenheit</option></select
    ><br /><br /> `,

  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  temparture: any;
  chooseData: string;
  city: string;
  showMe = true;
  measurement:string='';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    //this.getWeatherCelsius();
    //this.getWeatherFahrenheit();
  }

  select() {
    switch (this.chooseData) {
      case 'celsius': {
        if (this.city != null) {
          this.getWeatherCelsius();
        }
        break;
      }
      case 'fahrenheit': {
        if (this.city != null) {
          this.getWeatherFahrenheit();
        }
        break;
      }
    }
  }

  getWeatherCelsius(): void {
    this.weatherService.getWeather(this.city).subscribe(
      (response: Weather) => {
        this.measurement='°C';
        this.temparture = response?.current.temp_c;
        //console.log('Celsius =>' + this.temparture);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getWeatherFahrenheit(): void {
    this.weatherService.getWeather(this.city).subscribe(
      (response: Weather) => {
        this.measurement='°F';
        this.temparture = response?.current.temp_f;
        //console.log('Fahrenheit =>' + this.temparture);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onToggle(): void {
    this.showMe = !this.showMe; 
 } 
}
