const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/review-db', {useNewUrlParser: true } )
mongoose.Promise = global.Promise

const db = mongoose.connection


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', () => console.log('--MONGODB CONNECTED--'))

module.exports = db