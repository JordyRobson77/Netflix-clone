import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperExampleComponent } from './component/swiper-example/swiper-example.component';

import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { HomeSliderComponent } from './component/home-slider/home-slider.component';
import { TrendingComponent } from './component/trending/trending.component';
import { TopRatedComponent } from './component/top-rated/top-rated.component';
import { NowPlayingComponent } from './component/now-playing/now-playing.component';
import { OriginalsComponent } from './component/originals/originals.component';
import { SingleSliderComponent } from './component/single-slider/single-slider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './component/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperExampleComponent,
    HeaderComponent,
    HomeComponent,
    MovieDetailsComponent,
    HomeSliderComponent,
    TrendingComponent,
    TopRatedComponent,
    NowPlayingComponent,
    OriginalsComponent,
    SingleSliderComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
