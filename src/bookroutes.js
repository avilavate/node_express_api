
const express = require('express');

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
  

bookRouter.route('/').get((req, res) => {
    res.render('books', {
      nav: [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }],
      title: 'Library',
      books,
    });
  });
  
  bookRouter.route('/single').get((req,res)=>{
    console.log("Called");
    res.send("Single book view");
  });

  module.exports=bookRouter;
  