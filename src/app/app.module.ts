import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ReviewsComponent } from './general/reviews/reviews.component'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, ReviewsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
