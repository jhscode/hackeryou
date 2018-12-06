const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: [commentSchema]
})

module.exports = {
  Post: mongoose.model('Post', postSchema),
  Comment: mongoose.model('Comment', commentSchema)
}
