import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AddShowtimeComponent } from './showtime/add-remove-showtime/add-showtime.component';
import { ShowtimeListComponent } from './showtime/showtime-list/showtime-list.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SecurityInterceptorService } from './security-interceptor.service';
import { CurrencyPipe } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    AddShowtimeComponent,
    ShowtimeListComponent,
    ImageSliderComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgImageSliderModule
  ],
  providers: [CurrencyPipe, { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
