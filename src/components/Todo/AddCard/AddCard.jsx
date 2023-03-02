import React from 'react'
import PropTypes from 'prop-types'

const AddCard = ({handleTaskChange, handleAddTask, task}) => {
  return (
    <div className='todo-card add-card'>
      <textarea className='todo-input' type="text" name="" id="" onChange={handleTaskChange} value={task}></textarea>
      <div className='todo-add-crud'>
        <button onClick={handleAddTask} className="add-task-btn">Add Task</button>
        <button><img src="assets/images/delete.png" alt="Delete Btn" /></button>
      </div>
    </div>
  )
}

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleAddTask: PropTypes.func.isRequired,
  task: PropTypes.string.isRequired
}

export default AddCard