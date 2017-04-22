// Rest:

// An architectural style for building APIs.

// Stands for 'Representational State Transfer'. We decide
// that HTTP verbs and URLs mean something.

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.get('/api/person/:id', function(req, res){
    //get that data from database
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', jsonParser, function(req, res){
    //save to database

});

app.delete('/api/person/:id', function(req, res){
    //delete from the database
})

app.listen(port);

//What is Restful:
//You design the API that responds to the HTTPs Request
// verbs in a way that expected
//You look at the URL and understand what is doing
//Accepts and returns JSON  and deals with standard
// HTTP request (verbs) and very clear URLs that you understand
// what it does (CRUD or GET/POST/DELETE/)