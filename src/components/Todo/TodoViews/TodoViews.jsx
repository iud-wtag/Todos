import React from 'react'
import PropTypes from 'prop-types'
import IncompleteTask from 'components/Todo/TodoViews/controllers/IncompleteTask'

const TodoViews = ({todoList,handleDeleteTask}) => {
  return(
    todoList.map((list)=>{
      return(
        <div className='todo-card' key={list.id}>
          <h3 className='todo-header'>{list.data}</h3>
          <p className='todo-createTime'>Created At: {list.time}</p>
          <IncompleteTask handleDeleteTask={handleDeleteTask} taskID={list.id}/>
        </div>
      )
    })
  )
}

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired
}

export default TodoViews