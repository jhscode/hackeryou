// require our student model
const Student = require('./models/student');
//require our teacher model
const Teacher = require('./models/teacher');

// create a fake student
const hermione = new Student({
   firstName: 'Hermione',
   lastName: 'Granger',
   birthday: new Date('Sept 19 1973'),
   house: 'Gryffindor',
   friends: ['Ron', 'Harry', 'Talia', 'Mike']
});

const harry = new Student({
   firstName: 'Harry',
   lastName: 'Potter',
   house: 'Gryffindor',
   friends: ['Herminoe', 'Ron']
});

const ron = new Student({
   firstName: 'Ron',
   lastName: 'Potter',
   birthday: new Date('June 1 1973'),
   house: 'Gryffindor',
   friends: ['Harry', 'Ron']
});

const snape = new Teacher({
   fistName: 'Severus',
   lastName: 'Snape',
   subjects: ['Economics', 'Math']
})

module.exports = async () => { 
   try {
      // Remove all existing students from the database
      await Student.remove({})
      // Save our the new student
      // doc represents a doc in the database
      const herminoeDoc = await hermione.save();
      const harryDoc = await harry.save();
      const ronDoc = await ron.save();
      const snapeDoc = await snape.save();
      // Log out the student
      console.log(herminoeDoc, harryDoc, ronDoc, snapeDoc);
   } catch(e) {
      // Loug out the error
      console.log(e)
   }
}