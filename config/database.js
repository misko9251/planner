const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;