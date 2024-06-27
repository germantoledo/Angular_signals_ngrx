import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularSignalsRoutingModule } from './angular-signals-routing.module';
import { AngularSignalsComponent } from './angular-signals.component';
import { CounterComponent } from './counter/counter.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    AngularSignalsComponent,
    CounterComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    AngularSignalsRoutingModule
  ]
})
export class AngularSignalsModule { }
