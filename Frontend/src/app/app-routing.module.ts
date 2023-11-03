import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddShowtimeComponent } from './showtime/add-remove-showtime/add-showtime.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { ShowtimeListComponent } from './showtime/showtime-list/showtime-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {"path":"movies", component: MovieListComponent},
  {"path": "addmovie", component: AddMovieComponent},
  {"path": "updatemovie/:id", component: UpdateMovieComponent},
  {"path": "addshowtime", component: AddShowtimeComponent},
  {"path": "listshowtime", component: ShowtimeListComponent},
  {"path":"register",component:RegisterComponent},
  {"path":"login",component:LoginComponent},
  {"path":"cart", component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
