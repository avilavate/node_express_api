/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
// var debug = require("debug");
const morgan = require('morgan');
const path = require('path');




//const dbconn = sql.connect(config).catch(err => console.log(err));

const app = express();
const nav = [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }];

const bookRouter = require('./src/bookroutes')(nav);
const adminRouter = require('./src/adminRoutes')(nav);


app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30 days' }));
app.use('css', express.static(path.join(__dirname, 'public', 'css')));
app.use('js', express.static(path.join(__dirname, 'public', 'js')));
app.use('css', express.static(path.join('public', 'css')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin',adminRouter);

app.get('/', (req, res) => {


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
