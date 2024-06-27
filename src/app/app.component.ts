import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CounterService } from './services.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalsApp';

  // esto para angular signals

  // num = this.counterService.counter();

  // constructor(private counterService:  CounterService){}

  // private cdr = inject(ChangeDetectorRef);

  // ngOnInit() {

  //   // con esto obtengo el valor del signal del servicio
  //   setInterval(() => {
  //     this.num = this.counterService.counter();
  //     this.cdr.markForCheck();
  //   }, 100);
  // }
  count$!: Observable<number>;

  num = 0;

  constructor(private store: Store<{ count: number }>){
    this.count$ = store.select('count');
  }

  ngOnInit(){
    this.count$.subscribe((val) => this.num = val);
  }

  

}
