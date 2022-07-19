const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Specify collection below as third parameter
module.exports = mongoose.model('Todo', TodoSchema, 'movies');
