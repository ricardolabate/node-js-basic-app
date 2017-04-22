var Todos = require('../models/todoModel');

module.exports = function(app){
    //API Endpoint
    app.get('/api/setupTodos', function(req, res){

        //seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Study NodeJS',
                isDone: false,
                hasAttachment: false
            }
        ];
        //matches the Schema at todoModel.js
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}