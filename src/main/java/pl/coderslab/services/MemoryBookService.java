package pl.coderslab.services;

import org.springframework.stereotype.Service;
import pl.coderslab.models.Book;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemoryBookService implements BookService {
    private List<Book> list;
    private long nextId;

    public MemoryBookService() {
        list = new ArrayList<>();
        list.add(new Book(1L,
                "9788324631766",
                "Thinking in Java",
                "Bruce Eckel",
                "Helion",
                "programming"));
        list.add(new Book(2L,
                "9788324627738",
                "Rusz glowa, Java.",
                "Sierra Kathy, Bates Bert",
                "Helion",
                "programming"));
        list.add(new Book(3L,
                "9780130819338",
                "Java 2. Podstawy",
                "Cay Horstmann, Gary Cornell",
                "Helion",
                "programming"));
        nextId = 4L;
    }

    @Override
    public List<Book> loadAll() {
        return list;
    }

    @Override
    public Book loadById(long id) {
        for (Book book : list) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }

    @Override
    public void save(Book book) {
        if (book.getId() == 0) {
            book.setId(nextId);
            nextId++;
        } else {
            remove(book.getId());
        }
        list.add(book);
    }

    @Override
    public void remove(long id) {
        for (Book book : list) {
            if (book.getId() == id) {
                list.remove(book);
                return;
            }
        }
    }

//    public void setList(List<Book> list) {
//        this.list = list;
//    }
}
