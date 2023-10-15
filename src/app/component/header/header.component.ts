import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sticky = false;
  @ViewChild('stickHeader') header!: ElementRef;

  searchControl = new FormControl('');
  query: '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  //tslint:disable-next-line:typedef
  handleScroll(){
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight){
      this.sticky = true;
    }
    else {
      this.sticky = false;
    }
  }

  search(){
    console.log(this.searchControl);
    this.query = this.searchControl.value;
    this.router.navigate(['search-results', this.query])
  }

}
