import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../genre-sort/genre';
import { GenreService } from '../genre-sort/genre.service';
import { Movie } from '../movie-list/movie';
import { MovieService } from '../movie-list/movie.service';
import { UpdateMovieService } from './update-movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {

  constructor(
    private genreService: GenreService,
    private updateMovieService: UpdateMovieService,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  movies: Movie[];
  movie: Movie;
  genres: Genre[];

    form: any = {
      name: null,
      year: null,
      director: null,
      language: null,
      description: null,
      genre: null,
      status: null
    };

  ngOnInit(): void {

    this.movieService.getMovieById(this.route.snapshot.params['id'])
      .subscribe((result) => {
        this.movie = result;
        this.form.name = this.movie.name;
        this.form.year = this.movie.year;
        this.form.director = this.movie.director;
        this.form.language = this.movie.language;
        this.form.description = this.movie.description;
        this.form.genre = this.movie.genre;
        this.form.status = this.movie.status;
      });
       
      this.genreService
      .getAllGenres()
      .subscribe((result) => (this.genres = result));
      
  }

  onSubmit() {
    console.log(this.form);
    const id = this.movie.id;
    this.updateMovieService.updateMovie(id, this.form)

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
    console.log("Movie Updated!");
  };

  genreSelection = (event: any) => {
    const genreId = event.target.value;
    const genre : Genre = {
      id: genreId,
      name: ''
    };
    this.form.genre = genre;
    
  };
}
