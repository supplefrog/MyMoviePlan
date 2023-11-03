import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Showtime } from '../showtime';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/movie-list/movie.service';
import { CartItem } from 'src/app/cartItem';
import { CartService } from 'src/app/cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ShowtimeListService {

  url: string = 'http://localhost:8080';
  

  constructor(private http: HttpClient, private router: Router, private movieService: MovieService,
    private cartService: CartService) { }

  getAllShowtimes(): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(this.url + "/showtime");
  }

  getShowtimeByMovieId(id: number): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(this.url + "/showtime/search/" + id)
  }
  
  getMovieShowtimes(movieId: number) {
    this.router.navigate([`/listshowtime`], {queryParams: { movieId: movieId} });
  }

  btnClick = (id: number, name: string, price: number) => {
    let cartItem = new CartItem()
    cartItem.id = id
    cartItem.quantity = 1
    cartItem.productName = name;
    cartItem.price = price;
    this.cartService.addToCart(cartItem)
  };


}
