
CMSC 100 - C1L
Author: Luthelle L. Fernandez
Student Number: 2023 - 12438

Exercise 05 : Creating Web Server

Takeaways :

res.send follows this convention 

res.send("Book Found: <br>" + foundBook.Bookname + "<br>" + foundBook.ISBN + "<br>" + foundBook.Author + "<br>" + foundBook.published);

newline should be <br> and when joining them + not ,

This caused me to not see the .send in the server bacause I was doing 

res.send("Book Found" + foundBook.Bookname, foundBook.ISBN)