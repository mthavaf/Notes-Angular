import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  public openModal = false;

  constructor(private notesService: NotesService) {
    this.notesService.getNotes().subscribe((notes: any[]) => {
      this.notes = notes.map(note => {
        return {
          noteId: note.noteId,
    notesTitle: note.noteTitle,
    noteContent: note.noteContent
        }
      });
    });
    // // this.storage = localStorage.getItem('notes');
    // if (this.storage == null) {
    //   this.notes = [];
    // } else {
    //   // this.notes = JSON.parse(this.storage);
      
    // }
  }

  ngOnInit(): void {}
  addNote(note: Note) {
    // if note is undefined then close button was pressed
    if (!note) {
      this.openModal = false;
      return;
    }
    this.openModal = false;

    if (note.notesTitle.length == 0) {
      alert('enter the title');
    } else {
      this.notes.push(note);
      // localStorage.setItem('notes', JSON.stringify(this.notes));
      this.notesService.addNote(note).subscribe(() => {
        console.log('done adding');
        
      });
    }
  }
  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  updateNote(note: Note) {
    if (note.notesTitle.length == 0) {
      alert('enter the title');
    } else{
    // const index=this.notes.findIndex(n=> n.noteId == note.noteId && n.notesTitle == note.notesTitle && n.noteContent == note.noteContent );
    // this.notes.splice(index, 1,note);
    // localStorage.setItem('notes', JSON.stringify(this.notes));
    this.notesService.updateNotes(note).subscribe(() => {
      console.log('done update');
      window.location.reload();
    });
  }
}
}
