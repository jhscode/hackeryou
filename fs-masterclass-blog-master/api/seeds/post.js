// Require our Post and Comment models
const { Post, Comment } = require('../models/Post')
// Require our fake users
const users = require('./users')

// Create an array to store our fake posts
const posts = []

// Create a fake comment
const comment = new Comment({
  body: 'This is more of comment than a question...',
  user: users[1] // Talia
})

// Create a fake post
const post = new Post({
  title: 'TypeScript is awesome: a haiku',
  description: 'Enclosed find my poem on TypeScript...',
  user: users[0] // Mark,
})

// Add Talia's comment to Mark's post
post.comments.push(comment)

module.exports = post
