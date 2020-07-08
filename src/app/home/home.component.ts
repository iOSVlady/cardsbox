import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { WOW } from 'wowjs/dist/wow.min';
import { async } from 'rxjs/internal/scheduler/async';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
      
      trigger('box', [
        state('start', style({
          transform: 'translateY(100px)',
          opacity: 0
        })),
        state('end', style({
          transform: 'translateY(0px)',
          opacity: 1
        })),


        transition('start => end', animate(600))
        
        ]),
      trigger('navigation', [
        state('navbar-white', style({
          color:'black' 
        })),
        state('navbar-black', style({
          color:'white' 
        }))
      
      ]),
      trigger('backgrn', [
        state('bwhite', style({
          background:'white' 
        })),
        state('bblack', style({
          background:'black', 
        })),
        transition('bwhite => bblack', animate(300)),
        transition('bblack => bwhite', animate(300))
      ])
  ]
})

export class HomeComponent implements OnInit {
  navbar = 'navbar-white'
  background = 'bwhite'
  boxState = 'start';
  boxState_title = 'start';
  boxState_text = 'start';


  ngAfterViewInit() {
    setTimeout(_ => this.animate());
    setTimeout(_ => this.animate_title(), 600);
    setTimeout(_ => this.animate_text(), 1200);
    
}
  animate(){
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }
  animate_title(){
    this.boxState_text = this.boxState_text === 'end' ? 'start' : 'end'
  }
  animate_text(){
    this.boxState_title = this.boxState_title === 'end' ? 'start' : 'end'
  }
  animate_navbar(){
    this.navbar = this.navbar == 'navbar-black' ? 'navbar-white' : 'navbar-black'
  }
  animate_background(){
    this.background = this.background == 'bwhite' ? 'bblack' : 'bwhite'
  }

 
  

 
  constructor(){
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    //   // Reload WoW animations when done navigating to page,
    //   // but you are free to call it whenever/wherever you like
    //   this.wowService.init(); 
    // });
  }
  ngOnInit(): void {
  
    
  }
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e) {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 5) {
      let element = document.getElementById('navbar');
      console.log('You are 100px from the top to bottom');
      if(this.navbar == "navbar-white"){
          this.animate_background();
          this.animate_navbar();        }
      
    } else {
      let element = document.getElementById('navbar');
      if(this.navbar == "navbar-black"){
      this.animate_navbar();
      this.animate_background();
      }
      console.log('You are 500px from the top to bottom');
    }
  }
  
}
// 