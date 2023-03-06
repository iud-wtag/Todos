import React from 'react'
import PropTypes from 'prop-types'

const TodoViews = ({todoList}) => {
  return(
    todoList.map((list)=>{
        return(
          <div className='todo-card' key={list.id}>
            <h3 className='todo-header'>{list.data}</h3>
            <p className='todo-createTime'>Created At: {list.time}</p>
            <div className="todo-crud-btn">
              <button><img src="assets/images/check.png" alt="Completed Btn" /></button>
              <button><img src="assets/images/edit.png" alt="Edit Btn" /></button>
              <button><img src="assets/images/delete.png" alt="Delete Btn" /></button>
            </div>
          </div>
        )
      })
  )
  
}

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired
}

export default TodoViews