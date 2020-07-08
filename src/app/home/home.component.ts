import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';





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
        
        ])
  ]
})

export class HomeComponent implements OnInit {
  boxState = 'start';
  boxState_title = 'start';
  boxState_text = 'start';
  router: any;
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
 
  
  // private wowSubscription: Subscription;
 constructor(){
 
    // this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

    // // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    //   this.wowService.init(); 
    // });
    }
 
  ngOnInit(): void {
    // this.wowService.init();
    
  }
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e) {
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