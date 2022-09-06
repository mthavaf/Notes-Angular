import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from './Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notes-angular';
  constructor() {}
  
}
