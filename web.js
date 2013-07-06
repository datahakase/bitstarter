var express = require('express');
var fs = require('fs')

var app = express();

var pageContent = "...";

fs.readFile('./index.html', function (err, data) {
    if (err) throw err;
    pageContent = data.toString();
});

app.get('/', function (req, res) {
    res.send(pageContent);
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});
