import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

import {Navigation, Pagination, Swiper} from 'swiper/core'

Swiper.use([Navigation])

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  @Input() title: string;
  @Input() movies: Movie;


  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
