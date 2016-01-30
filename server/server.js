var fs = require('fs');
var pageTemplate = fs.readFileSync('template.html').toString();

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('*', function (req, res) {
    res.send(pageTemplate);
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});