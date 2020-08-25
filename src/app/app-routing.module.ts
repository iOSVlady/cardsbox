import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [{
  path: '',
  component: LoadingSpinnerComponent
},    
{
  path: 'home',
  loadChildren: () => import('./home/home.module')
    .then(mod => mod.HomeModule)
},
{
  path: '**',
  loadChildren: () => import('./home/home.module')
    .then(mod => mod.HomeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

