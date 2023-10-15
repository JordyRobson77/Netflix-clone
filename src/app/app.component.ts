import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from './models/movie';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'netflix-app';
  subs: Subscription[] = [];
  trending: Movie;
  popular: Movie;
  topRated: Movie;
  Originals: Movie;
  nowPlaying: Movie;
  latest: Movie;

  constructor(private movie: MovieService){}

  ngOnInit(){
    
  }

  ngOnDestroy(){
      this.subs.map(s => s.unsubscribe());
  }
}
