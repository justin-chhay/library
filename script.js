/*
    Justin Chhay
*/

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

const dune = new Book("DUNe", "authorlol", 24, false);
dune.info();