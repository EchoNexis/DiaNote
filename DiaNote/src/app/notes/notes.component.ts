import {Component, OnInit} from '@angular/core';
import {NgForOf, UpperCasePipe} from "@angular/common";
import {NoteServiceService} from "../note-service.service";
import {Observable} from "rxjs";
import {Note} from "../../assets/Note";


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgForOf, UpperCasePipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit{

  items = ["test", "test2","test", "test2","test", "test2"];
  notes:any = []

  constructor(private noteService: NoteServiceService) { }


  ngOnInit(): void{
    this.noteService.getAllNotes().subscribe((res:Note[]) => {
      for (let item of res){
        let note = [item.title, item.note, item.priority, item.id]
        console.log(item)
        this.notes.push(note)
      }
    });
  }

  public modifyNote(){
    console.log("pressed modify")
  }

  public deleteNote(id:String){
    console.log(id)
    this.noteService.deleteNote(id)
  }


}
