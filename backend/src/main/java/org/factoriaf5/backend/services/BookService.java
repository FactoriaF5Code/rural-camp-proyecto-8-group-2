package org.factoriaf5.backend.services;

import org.factoriaf5.backend.models.Book;
import org.factoriaf5.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    public List<Book> findByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    public boolean updateAvailability(Long id, boolean available) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setAvailable(available);
            bookRepository.save(book);
            return true;
        } else {
            return false;
        }
    }

    /*public boolean verificarDisponibilidad(Long id) {
        Book book = bookRepository.findById(id).orElse(null);
        return book != null && book.isDisponible();
    }*/
}
