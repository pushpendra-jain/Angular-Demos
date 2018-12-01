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

    this.notesService.addNote(this.note)
      .subscribe(data => {
        this.notes.push(data);
        console.log('notes added...');
        this.note = new Note();
      }, error => {
        console.log(error);
      });
    console.log(this.notes); 
  }
}