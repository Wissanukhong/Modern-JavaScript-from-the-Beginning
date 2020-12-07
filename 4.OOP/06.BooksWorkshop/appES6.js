class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');

    // Add classname to div
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get container
    const container = document.querySelector('.container');

    // Get form
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);

    // Removed alert 3 sec
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Load Storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      // เราต้องการ javaScript Object เพราะฉะนั้นเราจะต้องเรียกใช้งาน JSON.parse()
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;
      // Add book from local storeage to UI
      ui.addBookToList(book);
    });
  }

  // Add book
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get from value
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // UI constructor
  const ui = new UI();

  // Varidate
  if (title === '' || author === '' || isbn === '') {
    ui.showAlert('Please fill all a fieded', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to local storage
    Store.addBook(book);

    // Show success
    ui.showAlert('Bokk Added!', 'success');

    // ui clear fields
    ui.clearFields();
  }
  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  // Instaniat UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove form LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show alert
  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
});
