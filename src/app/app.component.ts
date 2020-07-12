import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {PreloadAllModules} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardsbox';


  constructor(){
   
    }
 
    stop(){
      // setTimeout(() => this.sub.unsubscribe(), 3000)
      
    }
  ngOnInit(): void {
  
  }
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
  }
  
}
