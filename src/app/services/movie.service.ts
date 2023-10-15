import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

const enum endpoint {
    latest = '/movie/latest',
    now_playing = '/movie/now_playing',
    popular = '/movie/popular',
    top_rated = '/movie/top_rated',
    upcoming = '/movie/upcoming',
    trending = '/trending/all/week',
    originals = '/discover/tv',
    action = '/discover/movie?with_genres=28',
    movieById = '/movie/'
}

@Injectable ({
    providedIn: 'root'
})

export class MovieService{
    private URL = 'https://api.themoviedb.org/3';
    private api_key = environment.api;

    constructor(private http: HttpClient){}

    getActionMovies():Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.action}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getLatestMovie():Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.latest}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getNowPlaying(): Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.now_playing}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getOriginals(): Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.originals}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getPopularMovies(): Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.popular}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getTopRated(): Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.top_rated}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getTrending(): Observable<Movie> {
        return this.http.get<Movie>(`${this.URL}${endpoint.trending}`,{
            params:{
                api_key: this.api_key
            }
        });
    }

    getById(id:string):Observable<Movie> {
        return this.http.get<Movie>('https://api.themoviedb.org/3/movie/'+id, {
            params:{
                api_key: this.api_key
            }
        })
    }
    getSearch(q:string):Observable<Movie>{
        return this.http.get<Movie>('https://api.themoviedb.org/3/search/movie', {
            params:{
                api_key: this.api_key,
                query: q
            }
        })
    }
}
