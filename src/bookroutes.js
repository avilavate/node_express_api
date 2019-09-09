const sql=require('mssql');


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

function bookRoutFunction(nav) {
  const express = require('express');

  const bookRouter = express.Router();
  bookRouter.route('/').get((req, res) => {
    res.render('books', {
      nav,
      title: 'Library',
      books,
    });
  });

  bookRouter.route('/single/:id').get((req, res) => {
    const { id } = req.params;
    console.log(`Single book view book id: ${id}`);

    res.render('booklist', {
      nav,
      title: 'Library',
      book: books[id],
    });
  });
  return bookRouter;
}
module.exports = bookRoutFunction;
