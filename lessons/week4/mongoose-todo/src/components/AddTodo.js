import React from 'react'

const AddTodo = props => {
  const { handleChange, addTodo, todo } = props
  return (
    <div className='AddTodo'>
      <input onChange={handleChange} value={todo} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo