import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie-list/movie';
import { MovieService } from 'src/app/movie-list/movie.service';
import { Showtime } from '../showtime';
import { ShowtimeListService } from './showtime-list.service';
import { CartService } from 'src/app/cart/cart.service';
import { CartItem } from 'src/app/cartItem';

@Component({
  selector: 'app-showtime-list',
  templateUrl: './showtime-list.component.html',
  styleUrls: ['./showtime-list.component.css']
})
export class ShowtimeListComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private showtimeService: ShowtimeListService,
    private cartService: CartService
  ) {}

  movies: Movie[];
  showtimes: Showtime[];
  movie: Movie;
  
  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((movie: any) =>{
      this.showtimeService.getShowtimeByMovieId(movie.movieId)
        .subscribe((result) => {
          this.showtimes = result;
          console.log(result)
        });

    })
    /*
    this.movieService
      .getAllMovies()
      .subscribe((result) => {

        this.movies = result
      });
      this.showtimeService
      .getAllShowtimes()
      .subscribe((result) => (this.showtimes = result));
      */
  }

  movieSelection = (event: any) => {
    const movieId = event.target.value;
    if (movieId != 0) {
      this.showtimeService
      .getShowtimeByMovieId(movieId)
      .subscribe((result) => (this.showtimes = result));
    } else {
      this.showtimeService
      .getAllShowtimes()
      .subscribe((result) => (this.showtimes = result));
    }
  }

  btnClick = (showtime: Showtime) => {
    let cartItem = new CartItem();
    cartItem.id = showtime.id;
    cartItem.productName = showtime.movie.name;
    cartItem.time = showtime.time;

    cartItem.quantity = 1;
    cartItem.price = 10;

    this.cartService.addToCart(cartItem);

  };
  

}
