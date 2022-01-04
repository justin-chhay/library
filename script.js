/*
    Justin Chhay
*/

//Variables
let myLibrary = [duneBook, blueBoxBook];
let duneBook = new Book("Dune", "Frank Herbert", 412, false);
let blueBoxBook = new Book("Blue Box", "MIURA Kouji", 35, false);

function Book(title, author, numOfPages, finishedReading) {
    this.title = "";
    this.author = "";
    this.numOfPages = 0;
    this.finishedReading = false;
    this.info = function() {
        let info = "";
        info += title;
        info += " by " + author;
        info += ", " + numOfPages + " pages, ";
        if (finishedReading) {
            info += "read already";
        } else {
            info += "not read yet";
        }
        return info;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const dune = new Book("DUNe", "authorlol", 24, false);
dune.info();