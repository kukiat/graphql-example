const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  description: String,
  name: String,
  created: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Comment', commentSchema)