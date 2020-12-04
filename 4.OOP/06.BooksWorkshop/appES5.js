// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function (book) {
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
};

// Delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
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
};

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

  // show alert
  ui.showAlert('Book removed!', 'success');

  e.preventDefault();
});
