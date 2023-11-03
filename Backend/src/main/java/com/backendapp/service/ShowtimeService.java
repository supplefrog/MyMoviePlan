package com.backendapp.service;

import org.springframework.stereotype.Service;

import com.backendapp.commons.MovieNotFoundException;
import com.backendapp.entities.Movie;
import com.backendapp.entities.Showtime;
import com.backendapp.repository.MovieRepository;
import com.backendapp.repository.ShowtimeRepository;

import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class ShowtimeService {

    private final ShowtimeRepository showtimeRepository;
    private final MovieRepository movieRepository;

    public ShowtimeService(ShowtimeRepository showtimeRepository, MovieRepository movieRepository) {
        this.showtimeRepository = showtimeRepository;
        this.movieRepository = movieRepository;
    }

    public void saveShowtime(Showtime showtime) {
        Optional<Movie> movieOptional = movieRepository.findById(showtime.getMovie().getId());
        Movie movie = movieOptional.orElseThrow(() -> new MovieNotFoundException("Movie not found for id: " + showtime.getMovie().getId()));
        showtime.setMovie(movie);
        showtime.setTime(showtime.getTime());
        showtimeRepository.save(showtime);
    }

    public List<Showtime> findAll() {
        return showtimeRepository.findAll();
    }

    public List<Showtime> findByShowtime(LocalTime time) {
        return showtimeRepository.findByTime(time);
    }

    public List<Showtime> findByMovieId(Integer movieId) {
        return showtimeRepository.findByMovieId(movieId);
    }

    public void deleteShowtime(Long id) {
        showtimeRepository.deleteById(id);
    }

}
