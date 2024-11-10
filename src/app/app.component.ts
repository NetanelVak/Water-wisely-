import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WeatherService } from './services/weather.service'
import { WeatherFormComponent } from './components/weather-form/weather-form.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, HttpClientModule, CommonModule, WeatherFormComponent, WeatherInfoComponent],
  providers: [WeatherService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Smart-Irrigation';
}
