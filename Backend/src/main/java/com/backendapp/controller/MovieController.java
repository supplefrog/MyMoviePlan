package com.backendapp.controller;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backendapp.controller.request.MovieRequest;
import com.backendapp.controller.request.MovieSearchRequest;
import com.backendapp.entities.Movie;
import com.backendapp.service.MovieService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public List<Movie> getAll() {
        return movieService.findAll();
    }

    @PostMapping("/addmovie")
    public ResponseEntity<Movie> saveMovie(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PostMapping("/searchmovies")
    public List<Movie> searchMovie(@RequestBody MovieSearchRequest search) {
        return movieService.searchByGenre(search.getGenreId());
    }

    @GetMapping("/movies/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable Integer id) {
        try {
            Movie movie = movieService.getMovie(id);
            return new ResponseEntity<>(movie, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("movies/{id}")
    public ResponseEntity<Movie> deleteMovie(@PathVariable Integer id) {
        try {
            movieService.deleteMovie(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("movies/{id}/status")
    public ResponseEntity<String> updateStatus(@PathVariable Integer id) {
        Movie movie = movieService.getMovie(id);
        if (movie == null) {
            return new ResponseEntity<>("Movie not found", HttpStatus.NOT_FOUND);
        }
        movieService.changeStatus(movie);
        return new ResponseEntity<>("Status changed successfully", HttpStatus.OK);
    }

    @PutMapping("updatemovie/{id}")
    public ResponseEntity<String> updateMovie(@PathVariable("id") Integer movieId, @RequestBody MovieRequest movieRequest) {
        movieService.updateMovie(movieId, movieRequest.getName(), movieRequest.getYear(),
                movieRequest.getDirector(), movieRequest.getLanguage(), movieRequest.getDescription(), movieRequest.getGenre());

        return new ResponseEntity<>("Movie updated successfully", HttpStatus.OK);
    }
}
