var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connecting to database on mLab (mongoLab)
mongoose.connect('mongodb://test:test@ds149049.mlab.com:49049/addressbook');

var Schema = mongoose.Schema;

//Constructor = lets me define the structure of a document
// names:types
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String 
});

//Function Constructor = generates objects
// 'Person' = name, Schema (what's the structure)
var Person = mongoose.model('Person', personSchema);

//this object will be an individual document
var john = Person({
	firstname: 'John',
	lastname: 'Doe',
	address: '555 Main St.'
});

//save the user
john.save(function(err){
	if(err) throw err;

	console.log('person saved!');
});

//other individual document
var jane = Person({
	firstname: 'Jane',
	lastname: 'Doe',
	address: '555 Main St.'
});

jane.save(function(err){
	if(err) throw err;

	console.log('person saved!');
});

//here we set the apiController module
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	// get all the users
	//this empty obj {} could be a query that I want
	Person.find({}, function(err, users){
		if(err) throw err;

		//object for all the users
		console.log(users);
	});

	next();
});

//pass by reference because 'app' is an object
htmlController(app);

apiController(app);


app.listen(port);
