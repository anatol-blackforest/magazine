//Подключение к базе данных
const mongoose = require('mongoose');
const keys = require('../config/keys')
mongoose.Promise = Promise;
let connection;

module.exports = async (req, next) => {
    try{
        if (!connection) connection = await mongoose.connect(keys.mongoURI);
        console.log('MongoDB connected.')
        next()
    }catch(err){
        console.log(err)
    }
}
