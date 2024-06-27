import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updatePhoto } from '../store/photo.actions';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {

  constructor(private store: Store<{ image: string }>) {}

  updatePhoto(){
    let url = 'some url charged'
    this.store.dispatch(updatePhoto({image: url}));
  }
}
