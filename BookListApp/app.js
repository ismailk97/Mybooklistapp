//Represents the Book
class Book{
	constructor(title, author, isbn){
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
//handle UI tasks
class UI{
	displayBooks(){
		const StoredBooks =[
		{
		title: 'book one',
		author: 'test',
		isbn: '3434434'
		},
		{
		title: 'book two',
		author: 'test2',
		isbn: '355555'
		}

		];

	const books = StoredBooks;
	books.forEach((books) => UI.addBookToList(book))

	}
	static addBookToList(book){
		const list = document.querySelector('#book-list');
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;


		//append the row to the list
		list.appendChild(row);
	}
}
//handle storage


//display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

	//prevent actual submit
	e.preventDefault();

	//get form values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	//initiere book
	const book = new Book(title, author, isbn);

	console.log(book)
});

//remove a book

