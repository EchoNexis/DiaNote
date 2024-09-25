import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  public items = ["test", "test2","test", "test2","test", "test2"];

}
