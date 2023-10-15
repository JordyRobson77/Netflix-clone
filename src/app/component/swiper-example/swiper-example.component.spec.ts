import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperExampleComponent } from './swiper-example.component';

describe('SwiperExampleComponent', () => {
  let component: SwiperExampleComponent;
  let fixture: ComponentFixture<SwiperExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
