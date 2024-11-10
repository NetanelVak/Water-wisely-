import { Component , EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent {
    @Output() citySearched = new EventEmitter<string>(); 

    city: string = '';


    searchCity() {
        if (this.city) {
        this.citySearched.emit(this.city); 
        this.city = ''; 
        }
    }

    onSubmit(event: Event) {
        event.preventDefault(); 
        this.searchCity(); 
    }
    }
