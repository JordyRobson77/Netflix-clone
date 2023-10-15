import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit,OnDestroy {

  subs: Subscription[] = [];
  topRated: Movie;

  headerBGUrl: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {

    this.subs.push(this.movie.getTopRated().subscribe(data => {
      this.topRated = data;
      console.log(data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.topRated.results![0].backdrop_path;
    }))

  }

  ngOnDestroy(): void{
    this.subs.map(s => s.unsubscribe());
  }

}
