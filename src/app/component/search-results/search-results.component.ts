import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  subs: Subscription[] = [];
  movieData: Movie;
  q: string;

  constructor(private route: ActivatedRoute, private movie: MovieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.q = params.get('query');
    });
    this.subs.push(this.movie.getSearch(this.q).subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    }))

  }

}
