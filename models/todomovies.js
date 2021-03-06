const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
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

module.exports = mongoose.model('movies', TodoSchema);