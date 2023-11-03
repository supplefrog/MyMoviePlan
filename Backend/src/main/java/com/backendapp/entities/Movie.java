package com.backendapp.entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "movies")
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    @Id
    @Column(name = "movie_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "movie_name")
    private String name;

    @Column(name = "movie_year")
    private Integer year;

    @Column(name = "movie_director")
    private String director;

    @Column(name = "movie_language")
    private String language;

    @Column(name = "movie_description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = true)
    private Genre genre;

    @Column(name = "movie_status")
    private Boolean status = true;

    public Movie(String idStr) {
        this.id = Integer.parseInt(idStr);
    }
}
