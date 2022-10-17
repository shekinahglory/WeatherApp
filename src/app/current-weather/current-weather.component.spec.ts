import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { injectSpy } from 'angular-unit-test-helper'
import { of } from 'rxjs'

import { WeatherService } from '../weather/weather.service'
import { WeatherSercieFake } from '../weather/weather.service.fake'
import { CurrentWeatherComponent } from './current-weather.component'

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  // beforeEach(async () => {
  //   const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
  //     'getCurrentWeather',
  //   ])
  //   TestBed.configureTestingModule({
  //     providers: [
  //       {
  //         provide: WeatherService,
  //         useValue: weatherServiceSpy,
  //       },
  //     ],
  //   }).compileComponents()
  //   weatherServiceMock = injectSpy(WeatherService)
  // })

  beforeEach(async () => {
    // const weatherServiceSpy = jasmine.createSpyObj('WeatherService', [
    //   'getCurrentWeather',
    // ])
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [
        {
          provide: WeatherService,
          useClass: WeatherSercieFake,
        },
      ],
      imports: [FormsModule],
    }).compileComponents()

    // weatherServiceMock = injectSpy(WeatherService)

    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    // weatherServiceMock.getCurrentWeather.and.returnValue(of())

    // fixture.detectChanges()
    expect(component).toBeTruthy()
  })

  // it('should get currentWeather from weatherService', () => {
  //   weatherServiceMock.getCurrentWeather.and.returnValue(of())
  //   fixture.detectChanges()

  //   expect(weatherServiceMock.getCurrentWeather).toHaveBeenCalledTimes(1)
  // })
})
