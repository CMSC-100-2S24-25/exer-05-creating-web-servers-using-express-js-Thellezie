/*
* CMSC 100 - C1L
* Author : Luthelle L. Fernandez
* Student Number : 2023 - 12438
* Date: March 04, 2025
*/

// Import Modules
import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );

// File Path (text file)
const TEXTFILE = 'books.txt';

// Function: Read the books.txt
function readBooks() {
    var books = [];
    try{
        const data = readFileSync('books.txt', 'utf8');
        const lines = data.split('\n');

        for (var i = 0 ; i < lines.length -1; i++){
            const book = lines[i].trim().split(',');
            books.push({Bookname: book[0], ISBN: book[1], Author: book[2], published: book[3]});
        }

        console.log(books);
        return books;
    }catch(eer){
        console.log({success: false});
    }
}

//  POST : add-book
app.post('/add-book', (req, res) => {
    const { Bookname, ISBN, Author, YearPublished } = req.body;
    // (1) Ensure all are not empty string
    if (!Bookname || !ISBN || !Author || !YearPublished) {
        return res.json({ success: false });
    }

    // (2) If no found empty string in req.body, Save the data to a file books.txt 
    // formatting: book name,isbn,author,year published
    const book_info = `${Bookname},${ISBN},${Author},${YearPublished}\n`;
    appendFileSync(TEXTFILE, book_info, 'utf8');
    res.json({ success: true }); // print in terminal if the book is saved in the books.txt

}) ;

/*
app.get('/', (req, res) => { 
    res.send('Hello! Luthelle'); 
    }); 
 
*/

// GET : ISBN and Author
app.get('/find-by-isbn-author', (req, res) => {
    const isbn = req.query.isbn;
    const author = req.query.author;
    
    // Find the matching ISBN and Author in text file
    if (!isbn || !author) {
        return console.log({ success: false });
    }

    // Read books from text file
    const books = readBooks();

    // Find the book with matching ISBN and Author
    let foundBook = null;
    for (let i = 0; i < books.length; i++) {
        if (books[i].ISBN === isbn && books[i].Author === author) {
            foundBook = books[i];
            break; // exit once found
        }
    }

    if (foundBook) {
        res.send("Book Found: <br>" + foundBook.Bookname + "<br>" + foundBook.ISBN + "<br>" + foundBook.Author + "<br>" + foundBook.published); // Log book details in server
        console.log({ success: true});
    } else {
        res.send("Book Not Found");
        console.log({ success: false });
    }
});


// GET: Find all books by Author
// app.get('/find-by-author', (req, res) => {
//     const author = req.query.author?.replace('+', ' ');

// });
