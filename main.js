let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead) {
  const book = new Book(title, author, pages, hasRead);
  myLibrary.push(book);
}

// Display each book card on the page
const body = document.querySelector('body');
   
function displayBook() {
  const bookCard = document.createElement('div');
  const bookContainer = document.createElement('div');
  const bookTitle = document.createElement('h4');

  bookCard.setAttribute('id', 'bookCard');
  bookCard.setAttribute('class', 'card');
  bookContainer.setAttribute('id', 'bookContainer');
  bookContainer.setAttribute('class', 'container');
  bookTitle.setAttribute('class', 'bookTitle');

  bookCard.appendChild(bookContainer);
  bookContainer.appendChild(bookTitle);

  body.appendChild(bookCard);

  myLibrary.forEach(book => {
    bookTitle.innerText = book.title;
  })
}

// Modal Toggle
const modal = document.getElementById('modal');

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

const newBookBtn = document.getElementById('newBook');
newBookBtn.addEventListener('click', openModal);

function openModal() {
  showModal();
}

// Close form when clicking outside of form
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', (event) => {
  hideModal();
});

//Form addBook functionality
//Add values to new Book object 
//then store in array.
const addBookbtn = document.getElementById('addBook');
addBookbtn.addEventListener('click', addBook);

function addBook(event) {
  event.preventDefault();

  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const hasRead = document.getElementById('hasRead').value;
  
  addBookToLibrary(title, author, pages, hasRead);
  displayBook();
  hideModal();
}

