const todos = ['cook dinner', 'walk the dog']

const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// GET /todos
router.route('/')
  .get(async (req, res, next) => {
   // 1. Get all todos in our DB
   try {
    const docs = await Todo.find({}) // <-- Go get ALL todo documents
    // 2. If successful, send todos to user
    res.status(200).send({ data: docs })
   } catch (e) {
    // 3. If unsuccessful, send error through middleware
    next(e)
   }

  })

router.route('/')
  .post(async (req, res, next) => {
    // 1. Grab the new todo from the request body
    const description = req.body.todo
    // 2. Instantiate Todo model
    const todo = new Todo({ description })
    try {
      // 3. Save it
      const doc = await todo.save()
      // 4. Respond with the created todo
      res.status(201).send({
        data: [doc]
      })
    } catch (e) {
      // 5. If error, send to the error handler
      next(e)
    }
  })

  // DELETE /todos/5bf1d5120a111d1a386e0ce0
router.route('/:id')
  .delete(async (req, res, next) => {
    // 1. Grab the todo object id from the url params.
    // same as writing id = req.params.id
    const { id } = req.params

    try {
      // 2. Find the matching todo by id and remove it
      const doc = await Todo.findByIdAndRemove({ _id: id })
      // 3. Respond with the deleted todo
      res.status(202).send({
        data: [doc]
      })
    } catch (e) {
      // 4. Handle the error
      next(e)
    }
  })

  // PATCH /todos/:id/complete
  // e.g /todos/5bf1d5120a111d1a386e0ce0/
  router
    .route('/:id/complete')
    .patch(async (req, res, next) => {
      // 1. Grab the id from the params
      const { id } = req.params
      // 2. Find the existing todo in our db by it's ID
      // 3. Flip the boolean value of completed on that todo and save it
      try {
        const doc = await Todo.findByIdAndUpdate(id, { completed: true })
      // 4. Send back the updated todo
        res.status(200).send({ data: [doc] })
      } catch (e) {
        // 5. Handle the error
        next(e)
      }
    })
exports.router = router