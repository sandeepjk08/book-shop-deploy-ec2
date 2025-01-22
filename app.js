const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample books data
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: '$10' },
    { id: 2, title: '1984', author: 'George Orwell', price: '$12' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: '$15' },
];

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/books', (req, res) => {
    res.render('books', { books });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
