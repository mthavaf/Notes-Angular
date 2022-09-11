import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css'],
})
export class EditNotesComponent implements OnInit {
  @Output() whenNoteEditedCallThis: EventEmitter<Note> = new EventEmitter();
  @Input() note: Note = new Note();

  constructor() { }

  ngOnInit(): void {
    this.note = structuredClone(this.note);
  }

  modifyNote() {
    if (this.note.notesTitle.length === 0) {
      console.log('error');
    } else {
      this.whenNoteEditedCallThis.emit(this.note);
    }
  }
  public closeModal(): void {
    this.whenNoteEditedCallThis.emit(undefined);
  }
}
