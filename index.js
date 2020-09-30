/*
 * Using the Prototype Design pattern on a to implement a Book lending service
 * Kindly uncomment the function call at the end to exec code
 * 
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




module.exports = {
    Books
}