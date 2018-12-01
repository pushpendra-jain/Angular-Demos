import { Injectable } from '@angular/core';
import {Note} from './note';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpClient : HttpClient) { }

  addNote(note: Note) : Observable<Note>{
    console.log("add note called...");
    return this.httpClient.post<Note>("http://localhost:3000/notes", note);    
  }

  getAllNote() : Observable<Note[]>{
    console.log("GetAllNote called ....");
    return this.httpClient
      .get<Note[]>("http://localhost:3000/notes");
  }
}
