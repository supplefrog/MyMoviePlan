package com.backendapp.controller.request;

import com.backendapp.entities.Genre;

import lombok.Data;

@Data
public class MovieRequest {

        private String name;
        private Integer year;
        private String director;
        private String language;
        private String description;
        private Genre genre;
    }

