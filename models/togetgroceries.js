const mongoose = require('mongoose');

const groceryToBuy = new mongoose.Schema({
    groceryItem: {
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

module.exports = mongoose.model('groceries', groceryToBuy)