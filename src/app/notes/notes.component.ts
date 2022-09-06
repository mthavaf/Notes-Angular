import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  storage: string | null;
  notes: Note[];

  constructor() {
    this.storage = localStorage.getItem('notes');
    if (this.storage == null) {
      this.notes = [];
    } else {
      this.notes = JSON.parse(this.storage);
    }
  }

  ngOnInit(): void {}
  addNote(note: Note) {
    this.notes.push(note);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  deleteNote(note: Note) {
    const index= this.notes.indexOf(note);
    this.notes.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(this.notes));
  }
}
