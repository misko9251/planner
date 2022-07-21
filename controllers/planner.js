const movies = require('../models/todomovies');

module.exports = {
    getTodos: async (request, response) => {
        const moviesToWatch = await movies.find()
        response.render('planner.ejs', {movieList: moviesToWatch});
    },
    addMovie: async (request, response) => {
         try {
             await movies.create({title: request.body.movie, completed: false})
             response.redirect('/planner')
         } catch (error) {
             console.log(error)
         }
    },
    deleteMovie: async (request, response) =>{
        try {
            await movies.findOneAndDelete({_id: request.body.movieIdFromMongo})
            console.log('Deleted movie from collection')
            response.json('OK')
        } catch (error) {
            console.log(error);
        }
    },
    movieWatched: async (request, response) => {
        try {
            await movies.findOneAndUpdate({_id: request.body.movieIdFromMongo},{
                completed: true
            })
            console.log('Movie watched')
            response.json('OK')
        } catch (error) {
            console.log('Error')
        }
    }
}