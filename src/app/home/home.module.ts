import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ShopComponent } from './shop/shop.component';
import { HomeRoutingModule } from './home-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NgwWowModule } from 'ngx-wow';
import {PaymentRequestModule} from '@ng-web-apis/payment-request';

import { PaymentComponent } from './payment/payment.component';
import { GeneralComponent } from './general/general.component';

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgwWowModule,
    // PaymentRequestModule
  ],
  exports:[
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    GeneralComponent,
    PaymentComponent,
    ShopComponent

  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
  constructor() {
    console.log('UserModule loaded.');
  }
  
}
