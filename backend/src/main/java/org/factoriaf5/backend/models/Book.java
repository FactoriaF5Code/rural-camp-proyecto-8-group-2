package org.factoriaf5.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "books")
public class Book {
    @Id
    Long id;
    String title;
    String author;
    String synopsis;
    Boolean state;


    public Book() {
    }

    public Book(Long id, String title, String author, String synopsis, Boolean state) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.synopsis = synopsis;
        this.state = state;

    }

    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getAuthor() {
        return author;
    }
    public String getSynopsis() {
        return synopsis;
    }
    public Boolean getState() {
        return state;
    }


    public void setId(Long id) {
        this.id = id;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }
    public void setState(Boolean state) {
        this.state = state;
    }

    /*public boolean isDisponible() {
        throw new UnsupportedOperationException("Unimplemented method 'isDisponible'");
    }*/

}