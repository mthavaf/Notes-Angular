import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-dis-notes',
  templateUrl: './dis-notes.component.html',
  styleUrls: ['./dis-notes.component.css']
})
export class DisNotesComponent implements OnInit {
    @Input()i!: Note;
  constructor() { }

  ngOnInit(): void {
  }

}
