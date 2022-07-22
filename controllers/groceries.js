const groceries = require('../models/togetgroceries');

module.exports = {
    getGroceries: async (request, response) =>{
        const groceriesToBuy = await groceries.find()
        response.render('groceries.ejs', {groceriesNeeded: groceriesToBuy})
    },
    insertGrocery: async (request, response)=>{
        try {
            await groceries.create({groceryItem: request.body.grocery, completed: false})
            response.redirect('/groceries')
        } catch (error) {
            console.log(error)
        }
    },
    deleteGrocery: async (request, response)=> {
        try {
            await groceries.findOneAndDelete({_id: request.body.groceryIdFromMongo})
            console.log('Grocery removed')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    },
    groceryAcquired: async (request, response)=> {
        try {
            await groceries.findOneAndUpdate({_id: request.body.groceryIdFromMongo}, {
                completed: true
            })
            console.log('Grocery acquired')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    },
    groceryStillNeeded: async (request, response)=> {
        try {
            await groceries.findOneAndUpdate({_id: request.body.groceryIdFromMongo}, {
                completed: false
            })
            console.log('Grocery still needed')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    }
}   