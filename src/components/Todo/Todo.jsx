import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo, handleCreateBtn } from 'actions';
import FilterTodo from 'components/Todo/controllers/FilterTodo';
import CreateTodo from "components/Todo/controllers/CreateTodo";
import AddCard from 'components/Todo/AddCard/AddCard';
import TodoViews from 'components/Todo/TodoViews/TodoViews';

const Todo = () => {
  const [task,setTask] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector((state)=>state.todoReducers.list)
  const isCreateBtnClicked = useSelector((state)=>state.handleTokens.isCreateBtnClicked);
  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  }
  const handleTaskChange = (e) =>{
    setTask(e.target.value);
  }
  const handleAddTask = (e) =>{
    if(task.trim()){
      dispatch(addTodo(task));
      setTask('')
      handleCreateClick();
    }
  }
  return (
    <>
      <div className="container todo-section">
        <h1 className='addTask-header'>Add Task</h1> 
        <div className="btn-section">
          <CreateTodo handleCreateClick={handleCreateClick} isCreateBtnClicked={isCreateBtnClicked}/>
          <FilterTodo/>
        </div>
        <div className='todo-board'>
          {
            isCreateBtnClicked?
              <AddCard handleTaskChange={handleTaskChange} handleAddTask={handleAddTask} task={task}/>
            :
            <></>
          }
          <TodoViews todoList={todoList}/>
        </div>
      </div>
    </>
  )
}

export default Todo