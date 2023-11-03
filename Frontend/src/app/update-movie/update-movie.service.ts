import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from '../movie-list/movie';

@Injectable({
  providedIn: 'root'
})
export class UpdateMovieService {

  url: string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  updateMovie(id: number, movie: Movie): Observable<Movie> {
    const updateUrl = `${this.url}/updatemovie/${id}`;
    return this.httpClient.put<Movie>(updateUrl, movie);
}
}
