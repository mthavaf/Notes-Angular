import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css'],
})
export class EditNotesComponent implements OnInit {
  @Output() whenNoteEditedCallThis: EventEmitter<Note> = new EventEmitter();
  @Input()
  note: Note = new Note();
  changedNoteTitle!: String;
  changedNoteContent!: String;

  constructor() {}

  ngOnInit(): void {}

  modifyNote() {
    if (this.changedNoteTitle.length === 0) {
      console.log('error');
    } else {
      this.note.notesTitle = this.changedNoteTitle;
      this.note.noteContent = this.changedNoteContent;
      this.whenNoteEditedCallThis.emit(this.note);
    }
  }
  public closeModal(): void {
    this.whenNoteEditedCallThis.emit(undefined);
  }
}
