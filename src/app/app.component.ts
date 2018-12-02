import { Component } from '@angular/core';
import { NotesService } from './notes.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-app';

  note: Note;
  notes: Array<Note> = [];

  constructor(private notesService: NotesService) {
    this.note = new Note();
  }

  ngOnInit() {
    this.notesService.getAllNote()
      .subscribe(allnotes => this.notes = allnotes,
        error => {
          console.log(error);
        });
  }

  takeNote() { 
    console.log(`Note Title : ${this.note.title}`);
    console.log(`Note text : ${this.note.text}`);
    this.notes.push(this.note);// optimistic about addtion
    this.notesService.addNote(this.note)
      .subscribe(data => {
        console.log('notes added...');
        this.note = new Note();
      }, error => {
        console.log(error);// Optimistic addtion failed, remved added note from list
        const noteIndex = this.notes.findIndex(note => note.title === this.note.title);
        this.notes.slice(noteIndex, 1);
      });
    console.log(this.notes); 
  }
}