import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
})
export class ListsComponent {
  object = signal({
    id: 1,
    title: 'Angular For Beginners',
  },
  {
    equal: (a, b) => {
      return a.id === b.id && a.title == b.title;
    },
  });

  title = computed(() => {
    console.log(`Calling computed() function...`);

    const course = this.object();

    return course.title;
  });

  updateObject() {
    // We are setting the signal with the exact same
    // object to see if the derived title signal will
    // be recalculated or not
    this.object.set({
      id: 1,
      title: 'Angular For Beginners',
    });
  }
}
