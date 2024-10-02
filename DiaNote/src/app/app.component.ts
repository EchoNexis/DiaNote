import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import "@ng-bootstrap/ng-bootstrap"
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet
} from "@ng-bootstrap/ng-bootstrap";
import {NotesComponent} from "./notes/notes.component";
import {DiaryComponent} from "./diary/diary.component";
import {HistoryComponent} from "./history/history.component";
import {SettingsComponent} from "./settings/settings.component";
import {AddNoteComponent} from "./add-note/add-note.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNav, NgbNavLinkButton, NgbNavItem, NotesComponent, NgbNavOutlet, DiaryComponent, HistoryComponent, SettingsComponent, NgbNavContent, AddNoteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../styles.css"]
})
export class AppComponent {
  title = 'DiaNote';
}
