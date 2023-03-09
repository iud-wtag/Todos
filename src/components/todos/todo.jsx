import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleCreateBtn } from "actions";
import Navbar from "components/todos/navbar/nav-bar";
import TopBar from "components/todos/topBar/top-bar";
import AddCard from "components/todos/addCard/add-card";
import TodoViews from "components/todos/todoViews/todo-views";

const Todo = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  const todoList = useSelector((state) => state.todoReducers.list);
  const isCreateBtnClicked = useSelector(
    (state) => state.handleTokens.isCreateBtnClicked
  );

  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };
  const handleAddTask = (e) => {
    if (inputData.trim()) {
      dispatch(addTodo(inputData));
      setInputData("");
      handleCreateClick();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <Navbar />
      <div className="container todo-section">
        <TopBar
          handleCreateClick={handleCreateClick}
          isCreateBtnClicked={isCreateBtnClicked}
        />
        <div className="todo-board">
          {isCreateBtnClicked && (
            <AddCard
              handleInputChange={handleInputChange}
              handleAddTask={handleAddTask}
              handleKeyDown={handleKeyDown}
              inputData={inputData}
            />
          )}
          <TodoViews todoList={todoList} />
        </div>
      </div>
    </>
  );
};

export default Todo;