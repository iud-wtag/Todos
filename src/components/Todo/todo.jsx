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

  function toggleEmptyError(toggleValue) {
    dispatch(handleEmptyError(toggleValue));
  }

  function handleCreateClick() {
    dispatch(handleCreateButton(isCreateButtonClicked));
  }

  function handleCancelClick() {
    handleCreateClick();
    toggleEmptyError(false);
  }

  function handleEditClick(taskId) {
    dispatch(handleEditButton(taskId));
  }

  function handleAddTask(inputTask) {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedTask));
    handleCreateClick();
    toggleEmptyError(false);
  }

  function handleDeleteTask(taskId) {
    dispatch(deleteTodo(taskId));
  }

  function handleCompleteTask(taskId, startDate, inputTask) {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
    dispatch(completeTodo(taskId, startDate));
  }

  function handleEditTask(taskId, editedInput) {
    const sanitizedTask = sanitizeInput(editedInput);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(taskId, sanitizedTask));
  }

  function handleEditCancelTask(taskId, inputTask) {
    dispatch(editTodo(taskId, inputTask));
  }

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container">
        <div className="todo__wrapper">
          <TopBar
            onCreateClick={handleCreateClick}
            isCreateButtonClicked={isCreateButtonClicked}
          />
          <div className="todo__card__wrapper">
            {isCreateButtonClicked && (
              <AddCard
                isEmptyError={isEmptyError}
                onAddTask={handleAddTask}
                onCancelClick={handleCancelClick}
                toggleEmptyError={toggleEmptyError}
              />
            )}
            <TodoCards
              todoList={todoList}
              onDeleteTask={handleDeleteTask}
              onCompleteTask={handleCompleteTask}
              onEditClick={handleEditClick}
              onEditTask={handleEditTask}
              onEditCancelTask={handleEditCancelTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
