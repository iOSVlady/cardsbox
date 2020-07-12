import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

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
    const intervalStream$ = interval(1000)
    this.sub = intervalStream$
    .subscribe(() => {
      this.showSpinner = false
      this.router.navigate(['home'])
    })}

  ngOnInit(): void {    
  }

}
