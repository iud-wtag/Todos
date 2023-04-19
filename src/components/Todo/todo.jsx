import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleCreateButton,
  deleteTodo,
  completeTodo,
  handleEditButton,
  handleEmptyError,
  editTodo,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoCards from "components/Todo/TodoCards/todo-cards";
import { sanitizeInput } from "helpers/sanitizeInput";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateButtonClicked = useSelector(
    (state) => state.handleButtonClick.isCreateButtonClicked
  );

  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const toggleEmptyError = (toggleValue) => {
    dispatch(handleEmptyError(toggleValue));
  };

  const handleCreateClick = () => {
    dispatch(handleCreateButton(isCreateButtonClicked));
  };

  const handleCancelClick = () => {
    handleCreateClick();
    toggleEmptyError(false);
  };

  const handleEditClick = (taskId) => {
    dispatch(handleEditButton(taskId));
  };

  const handleAddTask = (inputTask) => {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedTask));
    handleCreateClick();
    toggleEmptyError(false);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTodo(taskId));
  };

  const handleCompleteTask = (taskId, startDate, inputTask) => {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
    dispatch(completeTodo(taskId, startDate));
  };

  const handleEditTask = (taskId, editedInput) => {
    const sanitizedTask = sanitizeInput(editedInput);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
  };

  const handleEditCancelTask = (taskId, inputTask) => {
    dispatch(editTodo(taskId, inputTask));
  };

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container todo__section">
        <TopBar
          handleCreateClick={handleCreateClick}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <div className="todo__board">
          {isCreateButtonClicked && (
            <AddCard
              handleAddTask={handleAddTask}
              handleCancelClick={handleCancelClick}
              isEmptyError={isEmptyError}
              toggleEmptyError={toggleEmptyError}
            />
          )}
          <TodoCards
            todoList={todoList}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditClick={handleEditClick}
            handleEditTask={handleEditTask}
            handleEditCancelTask={handleEditCancelTask}
          />
          <div className="todo__card__wrapper">
            {isCreateButtonClicked && (
              <AddCard
                handleAddTask={handleAddTask}
                handleCancelClick={handleCancelClick}
                isEmptyError={isEmptyError}
                toggleEmptyError={toggleEmptyError}
              />
            )}
            <TodoCards
              todoList={todoList}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
              handleEditClick={handleEditClick}
              handleEditTask={handleEditTask}
              handleEditCancelTask={handleEditCancelTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
