const config = {
  user: 'avilavate',
  password: 'Ecil123!',
  server: 'pluralsightlibraryserver.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'LibraryDB',

  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

function bookRoutFunction(nav) {
  const express = require('express');
  const sql = require('mssql');
  const bookRouter = express.Router();

  bookRouter.route('/').get(async (req, res) => {
    //Sql Method
    // sql.close()
    // sql.connect(config).then(() => {
    //   return sql.query('select * from book');
    // }).then(result => {
    //   console.dir(`From SQL ${result.recordset[0]}`);
    //   debugger;
    //   books = result.recordset[0];


    //   sql.on('error', err => {
    //     // ... error handler
    //   });
    const { MongoClient } = require('mongodb');
    const uri = "mongodb+srv://avilavate:avilavate123@ps-library-mongodb-cluster-drotv.azure.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(async () => {
      const db = await client.db('LibraryDB');
      const collection = await client.db("LibraryDB").collection("books");
      collection.find({},async (err, result)=>{
        console.debug(err);
        let books=await result.toArray();
        res.render('books', {
          nav,
          title: 'Library',
          books
        });
      });
     
    });




    //SQL Method
  });

  bookRouter.route('/single/:id').get(async (req, res) => {
    const { id } = req.params;
    let book;
    (async () => {
      // sql.close()
      // const conn = await sql.connect(config);

      // const result = await conn.query('select * from book');

      // books = result.recordset[0];
      const { MongoClient, ObjectId } = require('mongodb');
      const uri = "mongodb+srv://avilavate:avilavate123@ps-library-mongodb-cluster-drotv.azure.mongodb.net/test?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true });
      client.connect(async err => {
        console.dir(err);
        const collection = await client.db("LibraryDB").collection("books");
        collection.findOne({ _id: new ObjectId(id) }, (err, result) => {
          book = result;

          res.render('booklist', {
            nav,
            title: 'Library',
            book,
          });
        });

      });
    })();

  });
  return bookRouter;
}
module.exports = bookRoutFunction;
