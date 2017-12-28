var Todos = require('../models/todoModel');


module.exports = function(app) {
    app.get('/api/setupTodos', function(req,res){
        //seed data 
        var starterTodos = [
            {
                username: 'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'buy cheese',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'learn node',
                isDone: false,
                hasAttachment: false
            },
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        })
    })
}