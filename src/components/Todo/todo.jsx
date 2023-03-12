import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleCreateBtn,
  deleteTodo,
  completeTodo,
  handleEmptyError,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoViews from "components/Todo/TodoViews/todo-views";

const Todo = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateBtnClicked = useSelector(
    (state) => state.handleTokens.isCreateBtnClicked
  );
  const isEditBtnClicked = useSelector(
    (state) => state.handleTokens.isEditBtnClicked
  );
  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const toggleEmptyError = () => {
    dispatch(handleEmptyError(isEmptyError));
  };
  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setInputData("");
    handleCreateClick();
    if (isEmptyError) toggleEmptyError();
  };

  const sanitizeInput = (input) => {
    return input.replace(/(<([^>]+)>)/g, "");
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
    if (isEmptyError) toggleEmptyError();
  };

  const handleAddTask = (e) => {
    const sanitizedData = sanitizeInput(inputData);
    if (sanitizedData.trim()) {
      dispatch(addTodo(sanitizedData));
      setInputData("");
      handleCreateClick();

      if (isEmptyError) toggleEmptyError();
    } else {
      if (!isEmptyError) toggleEmptyError();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskID) => {
    dispatch(deleteTodo(taskID));
  };

  const handleCompleteTask = (taskID) => {
    dispatch(completeTodo(taskID));
  };
  const handleEditTask = (taskID) => {
    // console.log("CLOICLCLOSDLAS");
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
          <TodoViews
            todoList={todoList}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
