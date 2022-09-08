import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css'],
})
export class AddNotesComponent implements OnInit {
  notesTitle!: String;
  noteContent!: String;
  @Output() whenNoteAddedCallThis: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const note = {
      notesTitle: this.notesTitle,
      noteContent: this.noteContent,
    };
    this.whenNoteAddedCallThis.emit(note);
  }

  public closeModal(): void {
    this.whenNoteAddedCallThis.emit(undefined);
  }
}
