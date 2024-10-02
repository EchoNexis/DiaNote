package com.serverside.serverside;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocketController {

    private String[] notes = new String[]{"this", "is", "a", "test", "no", "MongoDB"};


    @GetMapping("/notes")
    @ResponseBody
    public String[] getNote(){
        return notes;
    }

    @PutMapping("/addNote")
    public void putNote(String[] note){
        notes = new String[]{"done"};

    }
}
