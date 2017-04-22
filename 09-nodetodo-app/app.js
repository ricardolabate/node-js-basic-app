var express = require('express');
var app = express();
var mongoose = require('mongoose');

//where we set up Mongoose and MongoLab Database
//that means the config FOLDER
var config = require('./config');

//add the API Endpoint
var setupController = require('./controllers/setupController');

var apiController = require('./controllers/apiController');

//one env for local and on for the actual server
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

//even tough Angular has a client side template engine
//we are using 'ejs' as a Server side template engine
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);

apiController(app);

app.listen(port);