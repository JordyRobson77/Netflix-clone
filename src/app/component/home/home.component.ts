import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  trending: Movie;
  popular: Movie;
  topRated: Movie;
  originals: Movie;
  nowPlaying: Movie;
  latest: Movie;

  headerBGUrl: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {

    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      console.log(data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.trending!.results![0].backdrop_path;
    }))
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getLatestMovie().subscribe(data => this.latest = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));
    this.subs.push(this.movie.getOriginals().subscribe(data => this.originals = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
  }

  ngOnDestroy(): void{
    this.subs.map(s => s.unsubscribe());
  }
}
