// require mongoose so we can work with models
const mongoose = require('mongoose');

// create our scheme
const studentSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   birthday: Date,
   house: String,
   friends: Array
});

module.exports = mongoose.model('Student', studentSchema);
