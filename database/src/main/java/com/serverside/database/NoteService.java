package com.serverside.database;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Service
@Log
public class NoteService {

    private final NoteRepository noteRepository;
    private Example<Note> note;

    @Autowired
    public NoteService(NoteRepository noteRepository){
        this.noteRepository = noteRepository;
    }

    public Note createNote(Note note){
        return noteRepository.save(note);
    }

    public List<Note> getAllNotes(){
        return this.noteRepository.findAll();


        //log.info((Supplier<String>) noteRepository.findAll(note));
        //return //noteRepository.findAll(note);
    }

    public Optional<Note> getNoteById(String id){
        return noteRepository.findById(id);
    }



}
