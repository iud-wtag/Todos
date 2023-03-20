import React from "react";
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
import { sanitizeInput } from "helpers/sanitizeInput";

const Todo = () => {
  const dispatch = useDispatch();
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
  const handleCancelClick = () => {
    handleCreateClick();
    toggleEmptyError(false);
  };

  const handleAddTask = (inputTask) => {
    const sanitizedData = sanitizeInput(inputTask);
    if (sanitizedData.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedData));
    handleCreateClick();
    toggleEmptyError(false);
  };
  const handleDeleteTask = (taskID) => {
    dispatch(deleteTodo(taskID));
  };

  const handleCompleteTask = (taskID, startDate) => {
    dispatch(completeTodo(taskID, startDate));
  };

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container todo__section">
        <TopBar
          handleCreateClick={handleCreateClick}
          isCreateBtnClicked={isCreateBtnClicked}
        />
        <div className="todo__board">
          {isCreateBtnClicked && (
            <AddCard
              handleAddTask={handleAddTask}
              handleCancelClick={handleCancelClick}
              isEmptyError={isEmptyError}
              toggleEmptyError={toggleEmptyError}
            />
          )}
          <TodoViews
            todoList={todoList}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
