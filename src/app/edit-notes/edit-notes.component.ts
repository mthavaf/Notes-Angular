import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css'],
})
export class EditNotesComponent implements OnInit {
  @Output() whenNoteEditedCallThis: EventEmitter<Note> = new EventEmitter();
  notesEditedTitle!: String;
  noteEditedContent!: String;
  editedContent!: Note;
  @Input()
  note!: Note;
  constructor() {}

  ngOnInit(): void {}

  modifyNote() {
    if (this.notesEditedTitle.length === 0) {
      console.log('working');
    } else {
      this.note.notesTitle = this.notesEditedTitle;
      this.note.noteContent = this.noteEditedContent;
      this.whenNoteEditedCallThis.emit(this.note);
    }
  }
}
