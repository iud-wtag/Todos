import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo } from '../../actions';

const Todo = () => {
  const [task,setTask] = useState("");
  const [createToken,setCreateToken] = useState(false);
  const dispatch = useDispatch();
  const todoList = useSelector((state)=>state.todoReducers.list)
  const handleCreatClick = () => {
    setCreateToken(!createToken);
  }
  const handleTaskChange = (e) =>{
    setTask(e.target.value);
  }
  const handleAddTask = (e) =>{
    dispatch(addTodo(task));
    setTask('')
    handleCreatClick();
  }
  return (
    <>
      <div className="container todo-section">
        <h1 className='addTask-header'>Add Task</h1> 
        <div className="btn-section">
          <div className="create-btn">
            <button className='btn' onClick={handleCreatClick} disabled={createToken}>
              <img src="assets/images/plus.png" alt="plus" />
              Create
            </button>
          </div>
          <div className="filter-btn">
            <button className='btn'>All</button>
            <button className='btn'>Incomplete</button>
            <button className='btn'>Complete</button>
          </div>
        </div>
        <div className='todo-board'>
          {
            createToken?
            <div className='todo-card add-card'>
              <textarea className='todo-input' type="text" name="" id="" onChange={handleTaskChange} value={task}></textarea>
              <div className='todo-add-crud'>
                <button onClick={handleAddTask} className="add-task-btn">Add Task</button>
                <button><img src="assets/images/delete.png" alt="Delete Btn" /></button>
              </div>
            </div>
            :
            <></>
          }
          {
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
          }
        </div>
      </div>
    </>
  )
}

export default Todo