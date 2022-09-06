import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';

@Component({
  selector: 'app-dis-notes',
  templateUrl: './dis-notes.component.html',
  styleUrls: ['./dis-notes.component.css']
})
export class DisNotesComponent implements OnInit {
    @Input()i!: Note;
    @Output() whenNoteDeletedCallThis: EventEmitter<Note> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete() {
    const note = {
      notesTitle: '',
      noteContent: '',
    };
    this.whenNoteDeletedCallThis.emit(note);
  }

}
