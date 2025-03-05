/*
* CMSC 100 - C1L
* Author : Luthelle L. Fernandez
* Student Number : 2023 - 12438
* Lab Date: March 04, 2025
*/

// Import Modules
import needle from 'needle';

needle.get('http://localhost:3000/', (err, res) => {
     console.log(res.body);
})
needle.post(
    'http://localhost:3000/add-book',
    
    { Bookname: "Harry Potter and the Philosopher's Stone",
      ISBN: '978-0-7475-3269-9',
      Author: 'J.K Rowling',
      YearPublished: '1997',
     }, 
    
    (err, res) => {
    console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    
    { Bookname: "Harry Potter and the Chamber of Secrets",
      ISBN: '0-7475-3849-2',
      Author: 'J.K Rowling',
      YearPublished: '1998',
     }, 
    
    (err, res) => {
    console.log(res.body);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    
    { Bookname: "The Little Prince",
      ISBN: '978-0156012195',
      Author: 'Antoine Saint-Exupery',
      YearPublished: '1943',
    }, 
    
    (err, res) => {
    console.log(res.body);
    }
);


// Find by ISBN and Author
needle.post(
    'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling',
    {},
    (err, res) => {
        console.log(res.body);
    }
);

// // Find by Author
// needle.get('http://localhost:3000/find-by-author?author=J.K+Rowling', (err, res) => {
//     if (err) console.error(err);
//     else console.log(res.body);
// });