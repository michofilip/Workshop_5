$(function () {
    // function Book(author, id, isbn, publisher, title, type) {
    //     this.author = author
    //     this.id = id
    //     this.isbn = isbn
    //     this.publisher = publisher
    //     this.title = title
    //     this.type = type
    // }

    var $ul = $('#books')
    var $save = $('#save')
    var globalId = 0

    show()

    $ul.on('click', 'span', function () {
        var $span = $(this)
        var $div = $span.next()
        var bookId = $span.data('id')

        if ($span.hasClass("open")) {
            $span.removeClass("open")
            $div.slideUp(function () {
                $(this).empty()
            })
        } else {
            $span.addClass("open")
            getBook(bookId, function (book) {
                $div
                    .append($('<p>').text("author: " + book.author))
                    .append($('<p>').text("isbn: " + book.isbn))
                    .append($('<p>').text("publisher: " + book.publisher))
                    .append($('<p>').text("type: " + book.type))

                $div.slideDown()
            })
        }
    })

    $ul.on('click', 'a#delete', function (evt) {
        evt.preventDefault()
        // var $a = $(this)
        var bookId = $(this).data('id')

        removeBook(bookId, function () {
            show()
        })
    })

    $ul.on('click', 'a#edit', function (evt) {
        evt.preventDefault()
        var bookId = $(this).data('id')
        getBook(bookId, function (book) {
            globalId = book.id
            $('#author').val(book.author)
            $('#isbn').val(book.isbn)
            $('#publisher').val(book.publisher)
            $('#title').val(book.title)
            $('#type').val(book.type)
        })

        //     book = {
        //         author: $author.val(),
        //         id: $id.val(),
        //         $isbn.val(), $publisher.val(), $title.val(), $type.val()
        // }
        //
        //
        //     $author = $('#author')
        //     // $id = $('#id')
        //     $isbn = $('#isbn')
        //     $publisher = $('#publisher')
        //     $title = $('#title')
        //     $type = $('#type')
        //
        //     // var $a = $(this)
        //     var bookId = $(this).data('id')
        //
        //     removeBook(bookId, function () {
        //         show()
        //     })
    })

    $ul.on('click', 'a#add', function (evt) {
        evt.preventDefault()
        getBook(bookId, function (book) {
            globalId = 0
            $('#author').val("")
            $('#isbn').val("")
            $('#publisher').val("")
            $('#title').val("")
            $('#type').val("")
        })
    })

    $save.on('click', function (evt) {
        evt.preventDefault()

        $author = $('#author')
        $isbn = $('#isbn')
        $publisher = $('#publisher')
        $title = $('#title')
        $type = $('#type')

        var book = {
            'author': $author.val(),
            'id': globalId,
            'isbn': $isbn.val(),
            'publisher': $publisher.val(),
            'title': $title.val(),
            'type': $type.val()
        }
        console.log(book)
        console.log(JSON.stringify(book))


        addBook(JSON.stringify(book), 'json', function () {
            show()
        })
    })

    function show() {
        $ul.empty()
        getBooks(function (books) {
            books.forEach(function (book) {
                var $li = $('<li>')
                var $span = $('<span>')
                    .text(book.title)
                    .attr('data-id', book.id)
                var $div = $('<div>')
                    .css({
                        display: 'none'
                    })
                var $edit = $('<a>')
                    .attr("href", "/" + book.id)
                    .attr("id", "edit")
                    .attr('data-id', book.id)
                    .text("Edit")
                var $del = $('<a>')
                    .attr("href", "")
                    .attr("id", "delete")
                    .attr('data-id', book.id)
                    .text("Delete")
                $li.append($span)
                $li.append($div)
                $li.append($edit)
                $li.append($del)
                $ul.append($li)
                console.log(book)
            })
        })
    }
})

function request(onDone, bookId, method, data, dataType) {
    var BASE_URL = 'http://localhost:8080/books/'
    var url = bookId ?
        BASE_URL + bookId :
        BASE_URL
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        method: method || 'GET',
        data: data || null,
        dataType: dataType || null,
        success: onDone
    })
}

function getBooks(onDone) {
    request(onDone)
}

function getBook(bookId, onDone) {
    request(onDone, bookId)
}

function addBook(data, dataType, onDone) {
    request(onDone, null, 'POST', data)
}

function removeBook(bookId, onDone) {
    request(onDone, bookId, 'DELETE')
}