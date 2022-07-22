const mongoose = require('mongoose');

const placeToEatSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    completed: {
        type: Boolean,
        required: true,
      }
})

module.exports = mongoose.model('restaurants', placeToEatSchema)