import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { NgwWowModule } from 'ngx-wow';

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgwWowModule
  ],
  exports:[
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {
  constructor() {
    console.log('UserModule loaded.');
  }
  
}
