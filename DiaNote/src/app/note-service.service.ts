import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../assets/Note";

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private urlGetAllNotes = "http://localhost:8080/getAllNotes"
  private urlAddNote = "http://localhost:8080/addNote"
  private urlDeleteNote = "http://localhost:8080/deleteNote"

  constructor(private client: HttpClient) { }

  getAllNotes(): Observable<Note[]>{
    return this.client.get<Note[]>(this.urlGetAllNotes)
  }

  saveNote(note:any): Observable<any>{
    console.log("done saveNote" + note)
    return this.client.put(this.urlAddNote, note)
  }

  deleteNote(id:String){
    this.client.post(this.urlDeleteNote, id)
  }
}
