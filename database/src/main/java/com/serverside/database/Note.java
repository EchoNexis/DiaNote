package com.serverside.database;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "note")
public class Note {

    @Id
    String id;

    String title;
    String note;
    int priority;

    public boolean setTitle(String title){
        this.title=title;
        return true;
    }

}
