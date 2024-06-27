import { Component, computed, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { CounterService } from '../../services.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count = signal(0);
  counter = signal(0);
  multiplier: number = 0;

  derivedCounter = computed(() => {
    if (this.counter() == 0) {
      return 0;
    } else {
      return this.counter() * this.multiplier;
    }
    // return untracked(this.counter) * 10; // cuando se necesita computar una variable que no está siendo localizada con signal  por lo general raramente es usado
  });

  constructor(private counterService: CounterService) {
    // console.log(`counter value: ${this.counter()}`);
    effect(() => {
      // We just have to use the source signals
      // somewhere inside this effect
      const currentCount = this.counter();
      const derivedCounter = this.derivedCounter();

      console.log(`current values: ${currentCount} 
        ${derivedCounter}`);
    });

    effect(
      () => {
        this.count.set(1);
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  increment() {
    console.log(`Updating counter...`);
    // this.counter.set(this.counter() + 1);  // 1st way
    this.counter.update((counter) => counter + 1); // 2nd way

    // esto si se lo hace desde un servicio
    this.counterService.incrementCounter();
    console.log(this.counterService.counter());

  }
}
