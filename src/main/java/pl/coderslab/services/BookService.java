package pl.coderslab.services;

import pl.coderslab.models.Book;

import java.util.List;

public interface BookService {
    List<Book> loadAll();

    Book loadById(long id);

    void save(Book book);

    void remove(long id);
}
