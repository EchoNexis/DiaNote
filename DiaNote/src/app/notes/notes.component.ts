import {Component, OnInit} from '@angular/core';
import {NgForOf, UpperCasePipe} from "@angular/common";
import {NoteServiceService} from "../note-service.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgForOf, UpperCasePipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{

  items = ["test", "test2","test", "test2","test", "test2"];
  notes = []

  constructor(private noteService: NoteServiceService) { }


  ngOnInit(): void{
    this.noteService.getAllNotes().subscribe((res:any) => {
      this.notes = res; });
  }


}
