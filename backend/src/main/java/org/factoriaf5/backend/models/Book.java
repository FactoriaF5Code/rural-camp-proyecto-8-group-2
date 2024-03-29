package org.factoriaf5.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    
    String title;
    String author;
    String synopsis;
    Boolean available;


    public Book() {
    }

    public Book(Long id, String title, String author, String synopsis) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.synopsis = synopsis;
        this.available = true;

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
    public Boolean isAvailable() {
        return available;
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
    public void setAvailable(Boolean available) {
        this.available = available;
    }


}