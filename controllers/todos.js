const Todo = require('../models/todomovies');

module.exports = {
    getTodos: (request, response) => {
        response.render('todos.ejs');
    },
    addMovie: async (request, response) => {
         try {
             await Todo.create({title: request.body.title})
         } catch (error) {
             console.log(error)
         }
    }
}