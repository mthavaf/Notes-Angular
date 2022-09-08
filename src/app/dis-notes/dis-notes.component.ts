import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../Note';
import { NotesComponent } from 'src/app/notes/notes.component';

@Component({
  selector: 'app-dis-notes',
  templateUrl: './dis-notes.component.html',
  styleUrls: ['./dis-notes.component.css'],
})
export class DisNotesComponent implements OnInit {
  editChanger: boolean = false;
  @Input() note!: Note;
  @Output() whenNoteDeletedCallThis: EventEmitter<Note> = new EventEmitter();
  importedClass: NotesComponent = new NotesComponent();
  constructor() {}
  ngOnInit(): void {}
  onDelete(note: Note) {
    this.whenNoteDeletedCallThis.emit(note);
  }
  onEdit() {
    this.editChanger = true;
  }
  editNote(note: Note) {
    {
      const index = this.importedClass.notes.indexOf(note);
      this.importedClass.notes.splice(index, 1, note);
      localStorage.setItem('notes', JSON.stringify(this.importedClass.notes));
      this.editChanger = false;
    }
  }
}
