import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movie } from '../movie-list/movie';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {

  url: string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  addMovie(movie: Movie) {
    return this.httpClient.post<any>(this.url + "/addmovie", movie)
    .pipe(map(result => {
      console.log("SERVICE LOG PIPE")
      console.log(result)
      return result;
    }));
  }
}
