const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String
    }
})

//Specify collection below as third parameter
module.exports = mongoose.model('movies', TodoSchema);

// module.exports = mongoose.model('movies', TodoSchema);