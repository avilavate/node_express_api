/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
// var debug = require("debug");
const morgan = require('morgan');
const path = require('path');

const app = express();
const bookRouter = express.Router();

const books = [
  {
    title: 'War and pease',
    genre: 'Hostorical Fiction',
    Author: 'Lov Tolstoy',
    read: 'false',
  },
  {
    title: 'War and pease',
    genre: 'Hostorical Fiction',
    Author: 'Lov Tolstoy',
    read: 'false',
  },
  {
    title: 'War and pease',
    genre: 'Hostorical Fiction',
    Author: 'Lov Tolstoy',
    read: 'false',
  },
  {
    title: 'War and pease',
    genre: 'Hostorical Fiction',
    Author: 'Lov Tolstoy',
    read: 'false',
  },
];

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('css', express.static(path.join(__dirname, 'public', 'css')));
app.use('js', express.static(path.join(__dirname, 'public', 'js')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

bookRouter.route('/books').get((req, res) => {
  res.render('books', {
    nav: [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }],
    title: 'Library',
    books,
  });
});
app.use('/', bookRouter);


app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', {
    nav: [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }],
    title: 'Library',
  });
});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
  // eslint-disable-next-line no-undef
  console.log(`listening on port', ${chalk.green('3000')}`);
});
