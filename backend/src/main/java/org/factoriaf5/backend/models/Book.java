package org.factoriaf5.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Book {
    @Id
    Long id;
    String title;
    String author;
    /* boolean state; */
    String synopsis;
}