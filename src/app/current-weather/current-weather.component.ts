import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../icurrent-weather'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather
  city: string = 'Bethesda'
  inputCity!: string

  constructor(private weatherService: WeatherService) {
    const date: any = new Date()
    console.log('THe date : ' + date)
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: date,
      image: 'assets/img/imageone.jpeg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(): void {
    this.weatherService
      .getCurrentWeather(this.city, 'US')
      .subscribe((data) => (this.current = data))
  }

  public searchWeatherInfo() {
    this.weatherService
      .getCurrentWeather(this.inputCity, 'US')
      .subscribe((data) => (this.current = data))
  }
}
