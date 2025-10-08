import { Component, OnInit, Input } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() searchTerm: string = '';

  movies: Movie[] = [];
  selectedMovie: Movie | null = null;
  error = false;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
      console.log(data);
      this.movies = data;
    },
      error: () => (this.error = true)
    });
  }

  filteredMovies() {
    return this.movies.filter(m =>
      m.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
}
