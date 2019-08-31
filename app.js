var express = require("express");
var chalk = require("chalk");
var debug = require("debug");
var morgan = require("morgan");
var path = require("path");

app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));

});

app.listen(3000, () => {
    debug(`listening on", ${chalk.green("3000")}`);
});