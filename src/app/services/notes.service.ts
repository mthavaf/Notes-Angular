import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  public addNote(note: Note): Observable<void> {
    return this.http.post<void>('http://localhost:8080/addNotes', {
      noteContent: note.noteContent,
      noteTitle: note.notesTitle
    });
  }

  public getNotes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/showNotes');
  }

  public updateNotes(note: Note): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/put/${note.noteId}`, {
      noteContent: note.noteContent,
      noteTitle: note.notesTitle
    });
  }
  
}
