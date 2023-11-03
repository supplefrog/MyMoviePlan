import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../genre-sort/genre';
import { GenreService } from '../genre-sort/genre.service';
import { ShowtimeListService } from '../showtime/showtime-list/showtime-list.service';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private genreService: GenreService,
    private showtimeService: ShowtimeListService
  ) {}

  movies: Movie[];
  genres: Genre[];
  filters = {
    keyword: ''
  }

  ngOnInit(): void {
    this.movieService
      .getAllMovies()
      .subscribe((result) => {
        console.log(result)

        this.movies = result
      });
      this.genreService
      .getAllGenres()
      .subscribe((result) => (this.genres = result));
  }

  genreSelection = (event: any) => {
    const genreId = event.target.value;
    if (genreId != 0) {
      this.movieService
      .getMoviesByGenre(genreId)
      .subscribe((result) => (this.movies = result));
    } else {
      this.movieService
      .getAllMovies()
      .subscribe((result) => (this.movies = result));
    }
  }

  listMovies() {
    this.movieService.getAllMovies().subscribe(
      data => this.movies = this.filterMovies(data)
    )
  }

  filterMovies(movies: Movie[]) {
    return movies.filter((m) => {
      return m.name.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

  redirectToMovieShowtimes(event: any) {
    console.log(event)
    const movieId = event.target.value;
    this.showtimeService.getMovieShowtimes(movieId);
  }

}
