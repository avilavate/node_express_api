var express = require("express");
var chalk = require("chalk");
var debug = require("debug");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.set("views","./src/views");
app.set("view engine","pug");

app.get("/", function(req, res){
   // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render("index",{list:['avil','suchi'], title:'My App'});
});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
    // eslint-disable-next-line no-undef
    console.log(`listening on port', ${chalk.green('3000')}`);
});
