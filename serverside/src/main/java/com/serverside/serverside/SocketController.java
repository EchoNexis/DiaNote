package com.serverside.serverside;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocketController {

    @GetMapping("/notes")
    @ResponseBody
    public String[] getNote(){
        return new String[]{"this", "is", "a", "test", "no", "MongoDB"};
    }
}
