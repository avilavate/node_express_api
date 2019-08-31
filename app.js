var express = require("express");
var chalk = require("chalk");
var debug = require("debug");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'index.html'));

});

// eslint-disable-next-line no-magic-numbers
app.listen(3000, () => {
    debug(`listening on', ${chalk.green('3000')}`);
});
