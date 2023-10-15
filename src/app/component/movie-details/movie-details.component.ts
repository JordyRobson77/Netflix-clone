import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  id: string;
  movieData: Movie;
  headerBGUrl: string;
  data: any;

  constructor(private route: ActivatedRoute, private movie: MovieService) { }
  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })

    this.subs.push(this.movie.getById(this.id).subscribe(data=>{
      this.movieData = data;
      this.data = data
      console.log(this.data);
      this.headerBGUrl = 'http://image.tmdb.org/t/p/original'+ this.data.backdrop_path;
    }))



  }

}
