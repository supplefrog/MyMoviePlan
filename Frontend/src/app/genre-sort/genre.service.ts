import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  url: string = 'http://localhost:8080/genres'

  constructor(private http: HttpClient) {}

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.url);
  }
}
