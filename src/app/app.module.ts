import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgwWowModule } from 'ngx-wow';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AppRoutingModule } from './app.routes';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { GeneralComponent } from './home/general/general.component';
import { PaymentComponent } from './home/payment/payment.component';
import { ShopComponent } from './home/shop/shop.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';



export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    GeneralComponent,
    PaymentComponent,
    ShopComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
  },
  {
      provide: APP_BASE_HREF,
      useValue: '',
  },
],
  bootstrap: [AppComponent]
})



export class AppModule { }


