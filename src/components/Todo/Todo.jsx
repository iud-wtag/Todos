import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo } from '../../actions';

const Todo = () => {
  const [data,setData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.todoReducers.list)
  return (
    <>
      <h1>Add Task</h1>
      <button onClick={()=>dispatch(addTodo(data))}>Create</button>
    </>
  )
}

export default Todo