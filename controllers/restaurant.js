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
    }
}