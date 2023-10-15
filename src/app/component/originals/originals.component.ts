import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-originals',
  templateUrl: './originals.component.html',
  styleUrls: ['./originals.component.scss']
})
export class OriginalsComponent implements OnInit,OnDestroy {

  subs: Subscription[] = [];
  originals: Movie;

  headerBGUrl: string;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {

    this.subs.push(this.movie.getOriginals().subscribe(data => {
      this.originals = data;
      console.log(data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.originals!.results![0].backdrop_path;
    }))

  }

  ngOnDestroy(): void{
    this.subs.map(s => s.unsubscribe());
  }

}
