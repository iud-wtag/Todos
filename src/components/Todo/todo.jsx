import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  handleCreateButton,
  handleEditButton,
  handleEmptyError,
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
    (state) => state.buttonClickReducers.isCreateButtonClicked
  );
  const isEmptyError = useSelector((state) => state.errorReducers.isEmptyError);

  function toggleEmptyError(toggleValue) {
    dispatch(handleEmptyError(toggleValue));
  }

  function handleCreate() {
    dispatch(handleCreateButton(isCreateButtonClicked));
  }

  function handleCancelClick() {
    handleCreate();
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
    handleCreate();
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

  function handleCancelEditTask(taskId, inputTask) {
    dispatch(editTodo(taskId, inputTask));
  }

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container">
        <div className="todo__wrapper">
          <TopBar
            onCreate={handleCreate}
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
              onCancelEditTask={handleCancelEditTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
