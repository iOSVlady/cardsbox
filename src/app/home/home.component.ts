import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(){}
 
  ngOnInit(): void {

  }
 

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 5) {
      let element = document.getElementById('navbar');
      element.classList.add('navbar-inverse');
      console.log('You are 100px from the top to bottom');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('navbar-inverse');
      console.log('You are 500px from the top to bottom');
    }

  }
}
// 