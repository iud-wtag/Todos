import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleCreateBtn,
  deleteTodo,
  completeTodo,
  handleEditBtn,
  handleEmptyError,
  editTodo,
  handleCurrentPage,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoViews from "components/Todo/TodoViews/todo-views";
import EmptyViews from "components/Todo/EmptyViews/empty-views";
import Pagination from "components/Todo/Pagination/pagination";
import { sanitizeInput } from "helpers/sanitizeInput";
import { TASK_PER_PAGE, LOAD_MORE, SHOW_LESS } from "common/constants";

const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateBtnClicked = useSelector(
    (state) => state.handleButtonClick.isCreateBtnClicked
  );
  const isEditBtnClicked = useSelector(
    (state) => state.handleButtonClick.isEditBtnClicked
  );
  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const currentPage = useSelector(
    (state) => state.handleCurrentPage.currentPage
  );

  const currentTask = TASK_PER_PAGE * currentPage - isCreateBtnClicked;
  const currentTodoList = todoList.slice(0, currentTask);
  const showLoadMoreButton = todoList.length > currentTask;
  const showSeeLessButton =
    todoList.length + isCreateBtnClicked > TASK_PER_PAGE;

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
  const handleEditClick = (taskId) => {
    dispatch(handleEditBtn(taskId, isEditBtnClicked));
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
  const handleCompleteTask = (taskId, startDate) => {
    dispatch(completeTodo(taskId, startDate));
  };
  const handleEditTask = (taskId, editedInput) => {
    const sanitizedTask = sanitizeInput(editedInput);
    if (sanitizedTask.trim() === "") {
      return false;
    }
    dispatch(editTodo(taskId, sanitizedTask));
    return true;
  };

  const handlePaginationClick = (buttonText) => {
    if (buttonText === LOAD_MORE) {
      dispatch(handleCurrentPage(currentPage + 1));
    } else {
      dispatch(handleCurrentPage(1));
    }
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
          {todoList.length ? (
            <TodoViews
              todoList={currentTodoList}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
              handleEditClick={handleEditClick}
              handleEditTask={handleEditTask}
            />
          ) : (
            !isCreateBtnClicked && <EmptyViews />
          )}
        </div>
        <div className="todo__pagination">
          {showLoadMoreButton ? (
            <Pagination
              buttonText={LOAD_MORE}
              handlePaginationClick={handlePaginationClick}
            />
          ) : (
            showSeeLessButton && (
              <Pagination
                buttonText={SHOW_LESS}
                handlePaginationClick={handlePaginationClick}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
