import { AppComponent } from './app.component'
import { TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { createComponentMock } from 'angular-unit-test-helper'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, createComponentMock('CurrentWeatherComponent')],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement

    expect(compiled.querySelector('h1')?.textContent).toContain('LocalCast Weather')
  })

  it('should check all the  ', () => {
    const val = 10
    const fixture = TestBed.createComponent(AppComponent)
    const comp = fixture.debugElement.query(By.css('.center'))
    expect(val).toBe(10)
  })
})

// fdescribe('Testing Frist Jasmine TEst Script', () => {
//   it('should just check what going on lol', () => {
//     console.log('I am inside the test script')
//     var tax = 10 * 2
//     expect(tax).toBe(10)
//   })
// })
