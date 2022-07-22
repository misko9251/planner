const restaurants = require('../models/placetoeat');

module.exports = {
    getRestaurantPage: async (request, response)=>{
        const placesToEat = await restaurants.find();
        response.render('restaurant.ejs', {restaurantList: placesToEat});
    },
    insertRestaurant: async (request, response)=>{
        try {
            await restaurants.create({restaurantName: request.body.restaurant, completed: false});
            response.redirect('/restaurant')
        } catch (error) {
            console.log(error);
        }
    },
    restaurantVisited: async (request, response)=>{
        try {
            await restaurants.findOneAndUpdate({_id: request.body.restaurantIdFromMongo}, {
                completed: true
            })
            console.log('We visited')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    },
    restaurantNotVisited: async (request, response)=>{
        try {
            await restaurants.findOneAndUpdate({_id: request.body.restaurantIdFromMongo},{
                completed: false
            })
            console.log('We need to visit still')
            response.json('OK')
        } catch (error) {
            console.log(error)
        }
    },
    removeRest: async (request, response)=>{
        try {
            await restaurants.findOneAndDelete({_id: request.body.restaurantIdFromMongo});
            console.log('Rest deleted')
            response.json('Got it')
        } catch (error) {
            console.log(error)
        }
    }
}