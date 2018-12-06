const todos = ['cook dinner', 'walk the dog']

const express = require('express')
const router = express.Router()
const Todo = require('../models/todo'); // Added  

// GET /todos
router.route('/')
  .get(async (req, res, next) => {
    // 1. Get all todos in our DB
    try {
      const docs = await Todo.find({}); // <-- Go get ALL todo documents
    // 2. If successful, send todos to user
    res.status(200).send({ data: docs })
    } catch(e) {
    // 3. If unsuccessful, send error through middleware
    next(e);
    }
  })

router.route('/')
  .post(async (req, res, next) => {
    // 1. Grab the new todo from the request body
    const description = req.body.todo // can change the todo variable after req.body.
    // 2. Instantiate Todo model
    const todo = new Todo({ description });
    try {
      // 3. Save it
      const doc = await todo.save();
      // 4. Respond with the created todo
      res.status(201).send({
        data: [doc]
      })
    } catch(e) {
      // 5. If error, send to the error handler
      next(e);
    }
  })

  // DELETE /todos/5bf1d6fc3cbad60547334f62
router.route('/:id')
  .delete(async (req, res, next) => {
    // 1. Grab the todo index from the url params.
    // same as writing index = req.params.index
    const { id } = req.params
    // 2. Find the matching todo by id and remove it
    try {
      const doc = await Todo.findByIdAndRemove({ _id: id });
      // 3. Respond with the deleted todo
      res.status(202).send({
        data: [doc]
      });
    } catch(e) {
      next(e);
    }
  })

  // PATCH /todos/:id/complete
  // e.g /todos/5bf1d6fc3cbad60547334f62/
router
  .route('/:id/complete')
  .patch(async (req, res, next) => {
    // 1. Grab the id from query params
    const { id } = req.params;
    // 2. Find the existing todo in our db by it's ID
    // 3. FLip the boolean value of the completed on that todo
    try {
      const doc = await Todo.findByIdAndUpdate(id, { completed: true });
    // 4. Send back the updated todo
      res.status(200).send({ data: [doc]});
    } catch(e) {
      next(e);
    }
  })


exports.router = router