const { Books } = require(".");

let store = []

let book = new Books('Things Fall Apart', 'Chinue Achebe', '234');


test("Add a new book to the store array", () => {
    expect(book.addBook()).toBeGreaterThan(0)
})

test("Check if the Lend Status changes when book is lended", () => {
    let title = 'Things Fall Apart';
    expect(book.lendBook(title)).toBe(true)
})

test("Check if Book is availbale for Lending", () => {
    let title = 'Things Fall Apart';
    expect(book.checkBookDetails(title)).toBe("Rented out")
})

test("Return A book and update the lend status", () => {
    let title = 'Things Fall Apart';
    expect(book.returnBook(title)).toBe(false)
})