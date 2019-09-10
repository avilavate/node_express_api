let books = [
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

const config = {
  user: 'avilavate',
  password: 'Ecil123!',
  server: 'pluralsightlibraryserver.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'LibraryDB',

  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

// const Getbooks = () => {

//   sql.close()
//   sql.connect(config).then(() => {
//     return sql.query('select * from book');
//   }).then(result => {
//     console.dir(`From SQL ${result.recordset}`);
//     return result.recordset;
//   }).catch(err => {
//     console.dir(err);
//   });

//   sql.on('error', err => {
//     // ... error handler
//   });

// };

function bookRoutFunction(nav) {
  const express = require('express');
  const sql = require('mssql');
  const bookRouter = express.Router();
  
  bookRouter.route('/').get((req, res) => {
    //Sql Method
    sql.close()
    sql.connect(config).then(() => {
      return sql.query('select * from book');
    }).then(result => {
      console.dir(`From SQL ${result.recordset}`);
      books= result.recordset;
      res.render('books', {
        nav,
        title: 'Library',
        books:  books
      });
    }).catch(err => {
      console.dir(err);
    });

    sql.on('error', err => {
      // ... error handler
    });

    //SQL Method


    
  });

  bookRouter.route('/single/:id').get(async (req, res) => {
    const { id } = req.params;
    console.log(`Single book view book id: ${id}`);

  //   const book = Getbooks().then(res => console.dir(res));
  //   console.dir(`Book from SQL ${book}`);
  //   res.render('booklist', {
  //     nav,
  //     title: 'Library',
  //     book,
  //     //books[id],
  //   });
   });
  return bookRouter;
}
module.exports = bookRoutFunction;
