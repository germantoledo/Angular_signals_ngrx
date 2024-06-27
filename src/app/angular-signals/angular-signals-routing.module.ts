import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularSignalsComponent } from './angular-signals.component';
import { CounterComponent } from './counter/counter.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'list',
    component: ListsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularSignalsRoutingModule { }
