import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GeneralComponent } from './general/general.component';
import { PaymentComponent } from './payment/payment.component';
import { from } from 'rxjs';
// import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children:[
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
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }