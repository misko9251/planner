const movies = require('../models/todomovies');

module.exports = {
    getTodos: async (request, response) => {
        const moviesToWatch = await movies.find()
        response.render('planner.ejs', {movieList: moviesToWatch});
    },
    addMovie: async (request, response) => {
         try {
             await movies.create({title: request.body.movie})
             response.redirect('/planner')
         } catch (error) {
             console.log(error)
         }
    },
    deleteMovie: async (request, response) =>{
        console.log(request.body.movieIdFromMongo)
        try {
            await movies.findOneAndDelete({_id: request.body.movieIdFromMongo})
            console.log('Deleted movie from collection')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    }
}