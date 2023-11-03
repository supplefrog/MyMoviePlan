package com.backendapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backendapp.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {

    boolean existsByName(String name);
}
