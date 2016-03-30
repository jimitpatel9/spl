var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.use("/assets/styles/css/main.css", express.static(__dirname + '/assets/styles/css/main.css'));
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});