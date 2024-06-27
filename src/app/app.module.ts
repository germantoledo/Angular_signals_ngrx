import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './angular-ngrx/store/counter.reducer';
import { photoReducer } from './angular-ngrx/store/photo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, image: photoReducer } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
