'use strict';

const mongoose = require('mongoose')

const server = require('./api/server');
const { PORT, DB_URI } = require('./api/utils/constants');

mongoose.connect(DB_URI, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`DB connected at ${DB_URI}`)
})

server.listen(PORT, () => console.log(`App listening on port ${PORT}`));
