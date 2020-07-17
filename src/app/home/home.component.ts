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
          background:'black' 
        })),
        transition('bwhite => bblack', animate(300)),
        transition('bblack => bwhite', animate(300))
      ]),
      trigger('background', [ 
        state('back-white', style({
          background: 'white'
        })),
        state('back-black', style({
          background: 'black'
        })),
        state('back-material', style({
          background: '#c4cccd'
        })),
        transition('back-white => back-black', animate(200)),
        transition('back-black => back-white', animate(200)),
        transition('back-black => back-material', animate(200)),
        transition('back-material => back-black', animate(200))
       ])
  ]
})

export class HomeComponent implements OnInit {
  navbar = 'navbar-white';
  background = 'bwhite';
  boxState = 'start';
  boxState_title = 'start';
  boxState_text = 'start';
  background_page = 'back-white';
  background_page2 = 'back-black';
  route: any;



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
  animate_background_page(){
    this.background_page = this.background_page == 'back-white' ? 'back-black' : 'back-white'
  }
  animate_background_page2(){
    this.background_page = this.background_page == 'back-black' ? 'back-material' : 'back-black'
  }

 
  
post:any
 
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
      if(this.navbar == "navbar-white"){
          this.animate_background();
          this.animate_navbar();        }
      
    } else {
      if(this.navbar == "navbar-black"){
      this.animate_navbar();
      this.animate_background();
      }
      console.log('You are 500px from the top to bottom');
    }

    if(number > 600 && this.background_page == "back-white"){
      this.animate_background_page();
    }else if  (number <= 600 && this.background_page == "back-black"){
      this.animate_background_page();
    }
    else if(number > 1200 && this.background_page == "back-black"){
      this.animate_background_page2();
    }
    else if(number <= 1200 && this.background_page == "back-material"){
      this.animate_background_page2();
    }
  }
  
}
// 