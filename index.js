const myLibrary = [
  {
    author: 'Jack', title: 'Title of book', pages: 400, hasRead: false,
  },
  {
    author: 'Hoppie', title: 'Ma se poes', pages: 3, hasRead: false,
  },
  {
    author: 'Mary', title: 'A book', pages: 200, hasRead: false,
  },
];
const bookList = document.getElementById('book-list');
const addBook = document.getElementById('submit');


const bookFactory = (author, title, pages, hasRead) => ({
  author, title, pages, hasRead,
});

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function addClickEventForDelete(buttons) {
  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      btn.parentElement.remove();
    });
  });
}

function addClickEventForEdit(buttons) {
  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      myLibrary[index].hasRead = !myLibrary[index].hasRead;
      const readElement = document.querySelectorAll('.card')[index].children[3];
      readElement.innerHTML = `Has read? ${myLibrary[index].hasRead}`;
    });
  });
}

function createBookCard(bookList, book) {
  const card = bookList.appendChild(document.createElement('div'));
  card.classList.add('card');
  card.appendChild(document.createElement('h4')).innerHTML = `${book.title}`;
  card.appendChild(document.createElement('p')).innerHTML = `Author: ${book.author}`;
  card.appendChild(document.createElement('p')).innerHTML = `Pages: ${book.pages}`;
  card.appendChild(document.createElement('p')).innerHTML = `Has read? ${book.hasRead}`;
  return card;
}

function createButton(container, btnName) {
  const btn = container.appendChild(document.createElement('button'));
  btn.innerHTML = btnName;
  btn.classList.add(btnName.toLowerCase());
  btn.classList.add('btn');
}

for (let i = 0; i < myLibrary.length; i += 1) {
  const bookCard = createBookCard(bookList, myLibrary[i]);
  const dltBtn = bookCard.appendChild(document.createElement('button'));
  dltBtn.innerHTML = 'Delete';
  dltBtn.classList.add('delete');
  dltBtn.classList.add('btn');
  const readBtn = bookCard.appendChild(document.createElement('button'));
  readBtn.innerHTML = 'Read';
  readBtn.classList.add('read');
  readBtn.classList.add('btn');
}

const readBtns = document.querySelectorAll('.read');

addClickEventForEdit(readBtns);

addBook.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const book = bookFactory(author, title, pages, false);
  addBookToLibrary(book);
  const bookCard = createBookCard(bookList, book);
  createButton(bookCard, 'Delete');
  const removeBtns = document.querySelectorAll('.delete');
  addClickEventForDelete(removeBtns);
  createButton(bookCard, 'Read');
  const readBtns = document.querySelectorAll('.read');
  const index = readBtns.length - 1;
  readBtns[readBtns.length - 1].addEventListener('click', () => {
    myLibrary[index].hasRead = !myLibrary[index].hasRead;
    const readElement = document.querySelectorAll('.card')[index].children[3];
    readElement.innerHTML = `Has read? ${myLibrary[index].hasRead}`;
  });
});

const removeBtns = document.querySelectorAll('.delete');


addClickEventForDelete(removeBtns);
