const mongoose = require('mongoose');

const User = require('../models/User')
const { Post } = require('../models/Post')
const users = require('./users')
const post = require('./post')
const uri = 'mongodb://localhost:27017/blog'

// truncate is just a fancy word for 'delete all of'
const truncateDatabase = async () => {
  return Promise.all([User.deleteMany(), Post.deleteMany()])
}

const makeSeeds = async () => {
  //connect to our mongo database
  await mongoose.connect(uri);
  // once connected, delete all the old cruft
  await truncateDatabase();
  // once cruft is gone, add fake userse to db
  await Promise.all(users.map(user => user.save()));
  // save our seeded post into the database
  await post.save();
  // once finished, close the connection
  mongoose.connection.close();
}

makeSeeds();