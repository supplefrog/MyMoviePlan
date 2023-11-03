import { Component } from '@angular/core';
import { MovieService } from 'src/app/movie-list/movie.service';
import { AddShowtimeService } from './add-showtime.service';
import { ShowtimeListService } from '../showtime-list/showtime-list.service';
import { Showtime } from '../showtime';
import { Movie } from 'src/app/movie-list/movie';

@Component({
  selector: 'app-add-showtime',
  templateUrl: './add-showtime.component.html',
  styleUrls: ['./add-showtime.component.css']
})
export class AddShowtimeComponent {

  constructor(
    private movieService: MovieService,
    private addShowtime: AddShowtimeService,
  ) {}

  showtimes: Showtime[];
  movies: Movie[];
  filters = {
    keyword: ''
  }

    form: any = {
      movie: null,
      time: null
    };

  ngOnInit(): void {
      this.movieService
      .getAllMovies()
      .subscribe((result) => (this.movies = result));
  }

  onSubmit() {
    console.log(this.form);
    this.movies.find(movie => movie.id === parseInt(this.form.movie));
    this.addShowtime.addShowtime(this.form)

    .subscribe(
      data => {
        console.log("Processed")
      },
      error => {
        console.log("Error processing")
        console.log(error)
      }
    );
  }

  btnClick = () => {
    console.log("Showtime Added!");
  };
}
