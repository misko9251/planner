const movies = require('../models/todomovies');

module.exports = {
    getTodos: async (request, response) => {
        const moviesToWatch = await movies.find()
        response.render('todos.ejs', {movieList: moviesToWatch});
        console.log(moviesToWatch)
    },
    addMovie: async (request, response) => {
         try {
             await movies.create({title: request.body.movie})
             response.redirect('/todos')
         } catch (error) {
             console.log(error)
         }
    }
}