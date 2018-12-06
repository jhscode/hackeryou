// Require mongoose
const mongoose = require('mongoose');
// Store reference to mongoose.Schema in variable
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

// Create and export the model
module.exports = mongoose.model('User', userSchema);