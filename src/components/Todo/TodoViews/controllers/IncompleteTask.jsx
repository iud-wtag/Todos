import React from 'react'
import PropTypes from 'prop-types'

const IncompleteTask = ({handleDeleteTask,taskID}) => {
  return (
    <div className="todo-crud-btn">
      <button>
        <img src="assets/images/check.png" alt="Completed Btn" />
      </button>
      <button>
        <img src="assets/images/edit.png" alt="Edit Btn" />
      </button>
      <button onClick={()=>{handleDeleteTask(taskID)}}>
        <img src="assets/images/delete.png" alt="Delete Btn" />  
      </button>
    </div>
  )
}

IncompleteTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
}

export default IncompleteTask