const mongoose = require('mongoose')

const Schema = mongoose.Schema
const reviewSchema = new Schema({
  title: String,
  name: String,
  detail: String,
  created: { type: Date, default: Date.now() },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
})

module.exports = mongoose.model('Review', reviewSchema)