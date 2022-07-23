const chores = require('../models/moviestowatch');

module.exports = {
    getChoresPage: async (request, response)=>{
        const choresToDo = await chores.find();
        response.render('chores.ejs', {choresObj: choresToDo});
    },
    insertChore: async (request, response) =>{
        try {
            await chores.create({chore: request.body.chore, completed: false});
            response.redirect('/chores');
        } catch (error) {
            console.log(error);
        }
    },
    deleteChore: async (request, response) => {
        try {
            await chores.findOneAndDelete({_id: request.body.choreIdFromMongo})
            console.log('Chore delete')
            response.json('ok')
        } catch (error) {
            console.log(error)
        }
    },
    choreDone: async (request, response) => {
        try {
            await chores.findOneAndUpdate({_id: request.body.choreIdFromMongo}, {
                completed: true
            })
            console.log('Chore done')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    },
    choreNotDone: async (request, response)=>{
        try {
            await chores.findOneAndUpdate({_id: request.body.choreIdFromMongo}, {
                completed: false
            })
            console.log('Chore not done')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    }
}