import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardsbox';

  showSpinner: boolean = true;

  constructor(){
  
    }
 
  ngOnInit(): void {
  setTimeout(() => this.showSpinner = false, 3000);
    
  }
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
  }
  
}
