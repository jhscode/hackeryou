'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// When /users is hit, let routes/users.js handle the request
app.use('/users', require('./routes/users'))
app.use('/posts', require('./routes/posts'))

// this is the handler for the catch(e)
app.use((err, req, res, next) => {
  res.status(500).json(err);
});

module.exports = app;
