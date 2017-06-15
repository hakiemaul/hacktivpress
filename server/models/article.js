const mongoose = require('mongoose')
const Schema = mongoose.Schema

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {[String]},
  author: { type: Schema.Types.ObjectId, ref: 'User' }
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article