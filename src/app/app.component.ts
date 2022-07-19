import { Component, VERSION } from '@angular/core';
import { Weather } from './models/weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'httpo';
  name = 'Angular ' + VERSION.major;
}
