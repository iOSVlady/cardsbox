import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NgwWowModule } from 'ngx-wow';

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    CommonModule,
    PaymentRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgwWowModule
  ],
  exports:[
    PaymentComponent
  ],
  declarations: [
    PaymentComponent
  ],
  providers: []
})
export class PaymentModule {
  constructor() {
    console.log('UserModule loaded.');
  }
  
}