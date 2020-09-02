import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './home/payment/payment.component';
import { GeneralComponent } from './home/general/general.component';




const routes: Routes = [
  {
    path: '',
    component: LoadingSpinnerComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: GeneralComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// , {
//   preloadingStrategy: PreloadAllModules
// }
export class AppRoutingModule {}

