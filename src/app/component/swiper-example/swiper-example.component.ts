import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss']
})
export class SwiperExampleComponent implements OnInit {

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
