import React from 'react'
import PropTypes from 'prop-types'

const AddCard = ({handleInputChange, handleAddTask, inputData}) => {
  return (
    <div className='todo-card add-card'>
      <textarea className='todo-input' type="text" onChange={handleInputChange} value={inputData}></textarea>
      <div className='todo-add-crud'>
        <button onClick={handleAddTask} className="add-task-btn">Add Task</button>
        <button><img src="assets/images/delete.png" alt="Delete Btn" /></button>
      </div>
    </div>
  )
}

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired
}

export default AddCard