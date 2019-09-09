/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
// var debug = require("debug");
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const config = {
  user: 'avilavate',
  password: 'Ecil123!',
  server: 'pluralsightlibraryserver.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'LibraryDB',

  options: {
    encrypt: true // Use this if you're on Windows Azure
  }
};

//const dbconn = sql.connect(config).catch(err => console.log(err));

const app = express();
const nav = [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }];

const bookRouter = require('./src/bookroutes')(nav);


app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30 days' }));
app.use('css', express.static(path.join(__dirname, 'public', 'css')));
app.use('js', express.static(path.join(__dirname, 'public', 'js')));
app.use('css', express.static(path.join('public', 'css')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  sql.close();
  sql.connect(config).then(() => {
    return sql.query('select * from book');
  }).then(result => {
    console.dir(result)
  }).catch(err => {
    console.dir(err);
  });

  sql.on('error', err => {
    // ... error handler
  });

  res.render('index', {
    nav,
    title: 'Library',
  });
});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
  // eslint-disable-next-line no-undef
  console.log(`listening on port', ${chalk.green('3000')}`);
});
