// Require our User model so we can create new users
const User = require('../models/User')

// Create an array to store our fake users
const users = []

// Create a fake user
const mark = new User({
  name: 'Mark'
})

// Add to our fake user list
users.push(mark)

// ...and one more time!
const talia = new User({
  name: 'Talia'
})

users.push(talia)

// Make our fake users available outside of this file
module.exports = users