const mongoose = require('mongoose');
require('dotenv').config();
//const url = "mongodb://localhost:27017/hotels";
const url=process.env.MONGODB_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    //useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to mongodb server');
})

db.on('error', (err) => {
    console.log('Mongodb Connection error', err)
})

db.on('disconnected', () => {
    console.log('Mongodb Disconnected')
})
//somethis is added in this file
module.exports = db;