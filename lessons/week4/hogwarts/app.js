// Require the mongoose package
const mongoose = require('mongoose');
// Grab our seeds function
const seeds = require('./seeds');

// Connect to our databse called 'hogwarts'
const uri = 'mongodb://localhost:27017/hogwarts'

mongoose
   // connect to databse
   .connect(uri)
   // if successful
   .then(() => {
      // log this message
      console.log(`Successfully connected to: ${uri}`);
      seeds();
   })
   // if unsuccessful
   .catch(err => console.log(err.message))