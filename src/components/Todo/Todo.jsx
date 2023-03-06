import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleCreateBtn } from "actions";
import TopBar from "components/Todo/TopBar/TopBar";
import AddCard from "components/Todo/AddCard/AddCard";
import TodoViews from "components/Todo/TodoViews/TodoViews";

const Todo = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  const todoList = useSelector((state) => state.todoReducers.list);
  const isCreateBtnClicked = useSelector((state) => state.handleTokens.isCreateBtnClicked);

  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputData.trim()) {
      dispatch(addTodo(inputData));
      setInputData("");
      handleCreateClick();
    }
  };

  return (
    <>
      <div className="container todo-section">
        <TopBar 
          handleCreateClick={handleCreateClick} 
          isCreateBtnClicked={isCreateBtnClicked} 
        />
        <div className="todo-board">
          {isCreateBtnClicked ? (
            <AddCard
              handleInputChange={handleInputChange}
              handleAddTask={handleAddTask}
              inputData={inputData}
            />
          ) : (
            <></>
          )}
          <TodoViews todoList={todoList} />
        </div>
      </div>
    </>
  );
};

export default Todo;
