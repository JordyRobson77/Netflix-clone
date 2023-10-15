import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  nowPlaying: Movie;

  headerBGUrl: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {

    this.subs.push(this.movie.getNowPlaying().subscribe(data => {
      this.nowPlaying = data;
      console.log(data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.nowPlaying!.results![0].backdrop_path;
    }))

  }

  ngOnDestroy(): void{
    this.subs.map(s => s.unsubscribe());
  }

}
