import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { Genre } from '../genre-sort/genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  //get all movies
  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url + "/movies");
  }

  getMoviesByGenre(id: any): Observable<Movie[]> {
    return this.http.post<Movie[]>(this.url + "/searchmovies", {"genreId" : id})
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.url + "/movies/" + id);
  }

}
