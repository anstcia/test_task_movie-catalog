import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
  description: string;
  rating: number;
  poster: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.API_URL);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.API_URL}/${id}`);
  }
}
