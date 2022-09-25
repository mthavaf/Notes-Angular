import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesComponent } from './notes/notes.component';
import { DisNotesComponent } from './dis-notes/dis-notes.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddNotesComponent,
    NotesComponent,
    DisNotesComponent,
    EditNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
