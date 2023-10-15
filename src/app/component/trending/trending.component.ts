import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  trending: Movie;

  headerBGUrl: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {

    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      console.log(data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.trending!.results![0].backdrop_path;
    }))

  }

  ngOnDestroy():void{
    this.subs.map(s => s.unsubscribe());
  }
}
