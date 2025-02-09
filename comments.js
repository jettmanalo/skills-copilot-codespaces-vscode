// Create web server
// Create a server that has a route for /comments that responds with comments array
// Create a route for /hello that responds with a message

var express = require('express');
var app = express();

app.get('/comments', function (req, res) {
  res.json({ comments: [] });
});

app.get('/hello', function (req, res) {
  res.send('world');
});

app.listen(3000);