import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {
  sub: Subscription
  loader: Array<any[]>;
  showSpinner: boolean = true;
  constructor(public router: Router) {  
   
    }
  
    animationCreated(animationItem: AnimationItem): void {
      console.log(animationItem);
    }

  ngOnInit(): void {    
     const intervalStream$ = interval(3000)
    this.sub = intervalStream$
    .subscribe(() => {
      this.showSpinner = false
      this.router.navigate(['home'])
    })}

    options: AnimationOptions = {
      path: '/assets/SmartPhone.json',
  }

}
