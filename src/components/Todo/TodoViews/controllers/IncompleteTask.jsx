import React from 'react'

const IncompleteTask = () => {
  return (
    <div className="todo-crud-btn">
      <button><img src="assets/images/check.png" alt="Completed Btn" /></button>
      <button><img src="assets/images/edit.png" alt="Edit Btn" /></button>
      <button><img src="assets/images/delete.png" alt="Delete Btn" /></button>
    </div>
  )
}

export default IncompleteTask