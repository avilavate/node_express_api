/* eslint-disable no-undef */
const express = require('express');
const chalk = require('chalk');
// var debug = require("debug");
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const passport=require('passport');
const session=require('express-session');


//const dbconn = sql.connect(config).catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({'secret':'library'}));
require('./src/config/passport')(app);

const nav = [{ title: 'Books', link: '/books' }, { title: 'Authors', link: '/author' }];

const bookRouter = require('./src/bookroutes')(nav);
const adminRouter = require('./src/adminRoutes')(nav);
const authRouter = require('./src/authRoutes')();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30 days' }));
app.use('css', express.static(path.join(__dirname, 'public', 'css')));
app.use('js', express.static(path.join(__dirname, 'public', 'js')));
app.use('css', express.static(path.join('public', 'css')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);




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
