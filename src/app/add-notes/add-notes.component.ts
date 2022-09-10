import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css'],
})
export class AddNotesComponent implements OnInit {
  noteId!:Number;
  notesTitle!: String;
  noteContent!: String;
  @Output() whenNoteAddedCallThis: EventEmitter<Note> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const uniqID = (new Date()).getTime();
    console.log(uniqID)
    const note = {
      noteId :uniqID,
      notesTitle: this.notesTitle,
      noteContent: this.noteContent,
    };
    this.whenNoteAddedCallThis.emit(note);
  }

  public closeModal(): void {
    this.whenNoteAddedCallThis.emit(undefined);
  }
}
