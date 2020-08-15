import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgwWowModule } from 'ngx-wow';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { PaymentComponent } from './payment/payment.component';


export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }


