var express = require('express');
var app = express();

//here we set the apiController module
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

//pass by reference because 'app' is an object
htmlController(app);

apiController(app);


app.listen(port);
