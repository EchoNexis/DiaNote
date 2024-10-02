package com.serverside.database;

import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Supplier;

@RestController
@Log
public class WebController {

    private final NoteService noteService;

    public WebController(NoteService noteService){
        this.noteService = noteService;
    }

    @GetMapping("/getAllNotes")
    public ResponseEntity<List<Note>> getAllNotes(){
        ResponseEntity<List<Note>> a = ResponseEntity.ok(this.noteService.getAllNotes());
        return a;
    }

    @PutMapping("/addNote")
    public void addNote(@RequestBody Note note){
        log.info(note.note);
        this.noteService.createNote(note);
    }

    @PostMapping("/deleteNote")
    public void deleteNote(String id){
        log.info("id "+id);
    }




}
