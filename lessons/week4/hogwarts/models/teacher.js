const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   subject: String,
   evil: Array
});

module.exports = mongoose.model('Teacher', teacherSchema);