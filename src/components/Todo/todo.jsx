import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleCreateBtn,
  deleteTodo,
  handleEmptyError,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoViews from "components/Todo/TodoViews/todo-views";
import { sanitizeInput } from "helpers/sanitizeInput";

const Todo = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  const todoList = useSelector((state) => state.todoReducers.list);
  const isCreateBtnClicked = useSelector(
    (state) => state.handleButtonClick.isCreateBtnClicked
  );
  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const toggleEmptyError = (toggleValue) => {
    dispatch(handleEmptyError(toggleValue));
  };
  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setInputData("");
    handleCreateClick();
    toggleEmptyError(false);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
    toggleEmptyError(false);
  };

  const handleAddTask = (e) => {
    const sanitizedData = sanitizeInput(inputData);

    if (sanitizedData.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedData));
    setInputData("");
    handleCreateClick();
    toggleEmptyError(false);
  };
  const handleKeyDown = (e) => {
    const ENTER = "Enter";

    if (e.key === ENTER) {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskID) => {
    dispatch(deleteTodo(taskID));
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
              handleCancelClick={handleCancelClick}
              isEmptyError={isEmptyError}
            />
          )}
          <TodoViews todoList={todoList} handleDeleteTask={handleDeleteTask} />
        </div>
      </div>
    </>
  );
};

export default Todo;
