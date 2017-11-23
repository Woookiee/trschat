var path = require('path');
var express = require('express');

var routes = require('./routes');

var app = express();

var PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT);
console.log('Listening on '+PORT);