import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularNgrxRoutingModule } from './angular-ngrx-routing.module';
import { AngularNgrxComponent } from './angular-ngrx.component';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AngularNgrxComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    AngularNgrxRoutingModule
  ]
})
export class AngularNgrxModule { }
