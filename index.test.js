const { Books } = require(".");

let store = []

let book = new Books('Things Fall Apart', 'Chinue Achebe', '234');

describe('Add a new Book', () => {
    test("Check if book adding is successful", () => {
        expect(book.addBook()).toBeTruthy()
    })
})
describe('Lending Book Out', () => {
    test("Should Return True if book is lended out", () => {
        let title = 'Things Fall Apart';
        expect(book.lendBook(title)).toBeTruthy()
    })
})

describe('Book Lending Availability', () => {
    test("Check if Book is availbale for Lending", () => {
        let title = 'Things Fall Apart';
        expect(book.checkBookDetails(title)).toBe("Rented out")
    })
})

describe('Book Returning', () => {
    test("Should Return false if book is rented", () => {
        let title = 'Things Fall Apart';
        expect(book.returnBook(title)).toBeFalsy()
    })
})