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
      console.dir(`From SQL ${result.recordset[0]}`);
      debugger;
      books = result.recordset[0];


      sql.on('error', err => {
        // ... error handler
      });

      res.render('books', {
        nav,
        title: 'Library',
        books: [books]
      });
    }).catch(err => {
      console.dir(err);
    });
    //SQL Method



  });

  bookRouter.route('/single/:id').get(async (req, res) => {
    const { id } = req.params;
    (async () => {
      sql.close()
      const conn = await sql.connect(config);
      
      const result = await conn.query('select * from book');

      books = result.recordset[0];
      res.render('booklist', {
        nav,
        title: 'Library',
        book: books
      });
    })();

  });
  return bookRouter;
}
module.exports = bookRoutFunction;
