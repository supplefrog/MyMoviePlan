package com.backendapp.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backendapp.commons.ItemAlreadyExistsException;
import com.backendapp.entities.Genre;
import com.backendapp.entities.Movie;
import com.backendapp.repository.GenreRepository;
import com.backendapp.repository.MovieRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MovieService {

    private final MovieRepository movieRepository;
    private final GenreRepository genreRepository;

    public MovieService(MovieRepository movieRepository, GenreRepository genreRepository) {
        this.movieRepository = movieRepository;
        this.genreRepository = genreRepository;
    }

    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    public void saveMovie(Movie movie) {
        if(movieRepository.existsByName(movie.getName())) {
            throw new ItemAlreadyExistsException("The Movie " + movie.getName() + " has already been inserted.");
        } else {
            movie.setName(movie.getName());
            movie.setDescription(movie.getDescription());
            movie.setDirector(movie.getDirector());
            movie.setYear(movie.getYear());
            movie.setLanguage(movie.getLanguage());
            movie.setGenre(genreRepository.findById(movie.getGenre().getId()).get());
            movieRepository.save(movie);
        }
    }

    public void updateMovie(Integer movieId, String name, Integer year,
                            String director, String language, String description, Genre genre) {
        Optional<Movie> optionalMovie = movieRepository.findById(movieId);

        if (optionalMovie.isPresent()) {
            Movie movie = optionalMovie.get();

            if (name != null) {
                movie.setName(name);
            }

            if (year != null) {
                movie.setYear(year);
            }

            if (director != null) {
                movie.setDirector(director);
            }

            if (language != null) {
                movie.setLanguage(language);
            }

            if (description != null) {
                movie.setDescription(description);
            }

            if (genre != null) {
                movie.setGenre(genre);
            }

            movieRepository.save(movie);
        } else {
            throw new IllegalArgumentException("Movie not found with ID: " + movieId);
        }
    }

    public List<Movie> searchByGenre(Integer id){
        return movieRepository.findByGenreId(id);
    }

    public void changeStatus (Movie movie) {
        movie.setStatus(!movie.getStatus());
    }

    public Movie getMovie(Integer id) {
        return movieRepository.findById(id).get();
    }

    public void deleteMovie(Integer id) {
        movieRepository.deleteById(id);
    }
}
