const mongoose = require('mongoose');

const choresSchema = new mongoose.Schema({
    chore:{
        type: String,
        required: true
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

module.exports = mongoose.model('chores', choresSchema);