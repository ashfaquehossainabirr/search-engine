const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', href: 'https://www.google.com' },
    { title: 'The Great Batman', author: 'scarlett Johnson', href: 'https://www.pinterest.com' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', href: 'https://www.facebook.com' },
    { title: '1984', author: 'George Orwell', href: 'https://www.twitter.com' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', href: 'https://www.instagram.com' }
];

function displayBooks(filteredBooks) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.setAttribute('href', `${book.href}`);
        a.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
        li.appendChild(a);
    });
}

function sortList() {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    displayBooks(sortedBooks);
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    const bookList = document.getElementById('bookList');

    if(e.target.value.length > 0) {
        bookList.style.display = "block";

        const searchTerm = this.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm)
        );

        displayBooks(filteredBooks);
    } else {
        bookList.style.display = "none"
    }
});

// sortList();

displayBooks(books);