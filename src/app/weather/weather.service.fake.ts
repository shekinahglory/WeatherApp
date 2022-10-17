import { Observable, of } from 'rxjs'

import { ICurrentWeather } from '../icurrent-weather'
import { IWeatherService } from './weather.iservice'

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  image: '',
  temperature: 280.32,
  date: 1485789600,
  description: 'light intensity drizzle',
}

export class WeatherSercieFake implements IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }
}
