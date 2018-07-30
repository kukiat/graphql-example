const mongoose = require('mongoose')
const config = require('../../config')

mongoose.connect(
  `mongodb://${config.DB_USERNAME}:${config.DB_PASSWARD}@ds259711.mlab.com:59711/${config.DB_NAME}`, 
  { useNewUrlParser: true } 
)
mongoose.Promise = global.Promise

const db = mongoose.connection


db.on('error', console.error.bind(console, 'MongoDB connection error'))
db.once('open', () => console.log('--MONGODB CONNECTED--'))

module.exports = db