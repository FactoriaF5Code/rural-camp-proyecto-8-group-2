package org.factoriaf5.backend.controllers;

import java.util.List;

import org.factoriaf5.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

public class BookController {
    @Autowired
    private BookService bookService;


@GetMapping
    public List<Book> findAll() {
        return bookService.findAll();
    }
}