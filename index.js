/*
 * Using the Prototype design pattern to implement a Book lending service
 * Kindly uncomment the function call at the end to exec code
 */
let store = []

let Books = function(title, author, pages) {

    this.title = title
    this.author = author
    this.pages = pages
    this.isLended = false
}

Books.prototype = {
    addBook: function() {
        // console.log('this is the title of the book ' + this.title);
        var newbook = store.push({ title: this.title, author: this.author, pages: this.pages, lend: this.isLended });
        return newbook
            // console.log(`A new book titled: ${this.title} has been added to the store and avaliable for lending`);
    },
    lendBook: function(title) {
        let bookToLend = store.find((book, index) => book.title == title)
        return bookToLend.isLended = true;
        // console.log();
        // console.log(`The Book: ${title} written by ${bookToLend.author} has been lended out and it is not avaliable for lending again`);
    },
    checkBookDetails: function(title) {
        let bookToCheck = store.find((book, index) => book.title == title)
        var lendStatus
        if (bookToCheck.isLended === false) {
            return lendStatus = "Available for rent"
        } else {
            return lendStatus = "Rented out"
        }
        //     console.log();
        //     console.log(`${title} was written by ${bookToCheck.author} and it has ${bookToCheck.pages} pages. This Book ${lendStatus}`);
    },

    returnBook: function(title) {
        let bookToReturn = store.find((book, index) => book.title == title)
        return bookToReturn.isLended = false
            // console.log();
            // console.log(`This Book titled: ${title} has been returned and is now avaliable for lending`);
    }

}

// create a new book class for a book that is to be added to the store array. Books Parameters are (bookTitle, BookAuthor, Book page Number);
// let book1 = new Books('Things Fall Apart', 'Chinue Achebe', '234');
// let book2 = new Books('Play not with your Salvation', 'Mrs Nkeiruka Mba', '234');
// let book3 = new Books('Dealing with Faulty Foundations', 'Dr kelechi Mba', '144');
// let book4 = new Books('The Central Bank of Ideas', 'Ogbonnia Ikedichi', '543');

//Add Book to the store array
// const booksToAdd = (book) => {

//     return book.addBook();

// }

// //lend out a particular book
// const booksToLend = (book) => {

//     book.lendBook(book.title);
// }


// const booksToCheck = (book) => {

//     book.checkBookDetails(book.title);

// }


// const booksToReturn = (book) => {

//     book.returnBook(book.title);

// }





module.exports = {
    Books
}