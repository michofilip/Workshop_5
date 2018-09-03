package pl.coderslab.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.models.Book;
import pl.coderslab.services.BookService;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookService BookService;

//    @RequestMapping("/hello")
//    public String hello() {
//        return "{hello: World}";
//    }
//
//    @RequestMapping("/helloBook")
//    public Book helloBook() {
//        return new Book(1L, "9788324631766", "Thinking in Java", "Bruce Eckel", "Helion", "programming");
//    }

    @GetMapping
    public List<Book> loadAll() {
        return BookService.loadAll();
    }

    @GetMapping("{id}")
    public Book loadById(@PathVariable long id) {
        return BookService.loadById(id);
    }

    @PostMapping
    public void save(@RequestBody Book book) {
        BookService.save(book);
    }

    @PutMapping("{id}")
    public void save(@PathVariable long id,
                     @RequestParam String isbn,
                     @RequestParam String title,
                     @RequestParam String author,
                     @RequestParam String publisher,
                     @RequestParam String type) {
        Book book = new Book(id, isbn, title, author, publisher, type);
        BookService.save(book);
    }

    @DeleteMapping("{id}")
    public void remove(@PathVariable long id) {
        BookService.remove(id);
    }

}
