import { Genre } from "../genre-sort/genre";

export class Movie {

    id: number;
    name: string;
    year: number;
    director: string;
    language: string;
    description: string;
    genre: Genre;
    status: boolean;
    
}