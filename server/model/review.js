const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  title: String,
  author: String,
  name: String,
  created: { type: Date, default: Date.now() },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

module.exports = mongoose.model('Review', reviewSchema)