import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularNgrxComponent } from './angular-ngrx.component';
import { CounterComponent } from './counter/counter.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'photo', component: PhotoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularNgrxRoutingModule {}
