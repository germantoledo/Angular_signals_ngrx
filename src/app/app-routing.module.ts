import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren:() => import('./angular-signals/angular-signals.module').then(m => m.AngularSignalsModule)
  },
  {
    path : 'ngrx',
    loadChildren:() => import('./angular-ngrx/angular-ngrx.module').then(m => m.AngularNgrxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
