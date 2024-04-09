const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/hotels";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
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