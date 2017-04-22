var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//the same exact as we had on public/js/app.js
//except this is running on the Server
var people = this.people = [
        {
            name: 'John Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Jim Doe'
        }
];

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index', { serverPeople: people });
});

app.listen(port);