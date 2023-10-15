import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-single-slider',
  templateUrl: './single-slider.component.html',
  styleUrls: ['./single-slider.component.scss']
})
export class SingleSliderComponent implements OnInit {

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
