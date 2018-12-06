// 1. Require mongoose
const mongoose = require('mongoose')

// 2. Create a schema for our todo model (todoSchema)
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
})

// 3. Connect our schema to our model
const Todo = mongoose.model('Todo', todoSchema)

// 4. Export it
module.exports = Todo
