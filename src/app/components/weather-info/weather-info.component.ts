import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WeatherFormComponent } from '../weather-form/weather-form.component';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, WeatherFormComponent],
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  weatherData: any;
  rainData$: Observable<any> | null = null;
  loading: boolean = true; 
  city: string = 'ירושלים';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData(this.city);

  }

  getWeatherData(city: string) {
    this.loading = true;
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.loading = false; 
      },
      error: (error) => {
        this.loading = false; 

        
        if (error.status === 404) {
          alert('העיר שהוזנה לא נמצאה. נסה שוב עם שם עיר תקין.');
        } else {
          alert('אירעה שגיאה בעת הבאת נתוני מזג האוויר. אנא נסה שוב מאוחר יותר.');
        }

        console.error('Error fetching weather data:', error);
      }
    });
  }



  calculateTotalRainfall(rainData: any): number {
    if (rainData && rainData.daily) {
      return rainData.daily.reduce((sum: number, day: any) => sum + (day.rain || 0), 0);
    }
    return 0;
  }

  onCityChange() {
    this.getWeatherData(this.city);
  }

  onCitySearched(city: string) {
    this.city = city; 
    this.getWeatherData(city);
  }

  isRainyWeather(description: string): boolean {
    const rainyDescriptions = ['טפטוף', 'גשם', 'שלג', 'סופה', 'טורנדו'];
    return rainyDescriptions.some(rain => description.includes(rain));
  }
}
