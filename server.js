/*
* CMSC 100 - C1L
* Author : Luthelle L. Fernandez
* Student Number : 2023 - 12438
* Date: March 04, 2025
*/

// Import Modules
import express from 'express';
import { appendFileSync } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );

// File Path (text file)
const TEXTFILE = 'books.txt';

// app.post('/submit-data', (req, res) => {
//     res.send('Received a POST request from ' + req.body.name);
// });

app.post('/add-book', (req, res) => {
    // formatting
    const info = req.body.Bookname + ',' + req.body.ISBN + ',' + req.body.Author + ',' + req.body.YearPublished + '\n';
    appendFileSync(TEXTFILE, info, 'utf8');
}) ;