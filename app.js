/* eslint-disable no-undef */
var express = require("express");
var chalk = require("chalk");
//var debug = require("debug");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));
app.use("css",express.static(path.join(__dirname,"public","css")));
app.use("js",express.static(path.join(__dirname,"public","js")));

app.set("views","./src/views");
app.set("view engine","ejs");

app.get("/", function(req, res){
   // res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render("index",{list:['avil','suchi'], title:'Library'});
});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
    // eslint-disable-next-line no-undef
    console.log(`listening on port', ${chalk.green('3000')}`);
});
