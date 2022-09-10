import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-dis-notes',
  templateUrl: './dis-notes.component.html',
  styleUrls: ['./dis-notes.component.css'],
})
export class DisNotesComponent implements OnInit {
  public openModal = false;
  @Input() note!: Note;
  @Output() whenNoteDeletedCallThis: EventEmitter<Note> = new EventEmitter();
  @Output() noteEdited: EventEmitter<Note> = new EventEmitter();
  
  // importedClass: NotesComponent = new NotesComponent(); // hehe... good one. don't overuse your head!
  constructor() {}
  ngOnInit(): void {}
  onDelete(note: Note) {
    this.whenNoteDeletedCallThis.emit(note);
  }
  editNote(note: Note) {
    // you want to pass data from C -> B -> A. you thought you can create A from B and update A. you can't do that

    // like you passed from C -> B. do the same B -> A.

    if (!note) {
      this.openModal = false;
      return;
    }
    this.noteEdited.emit(note);

  }
}
