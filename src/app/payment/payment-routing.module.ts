import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
// import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [
  {
    path: '',
    component: PaymentComponent,
    
  }
];

@NgModule({
  imports: [ RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})
export class PaymentRoutingModule { }