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
  handleCurrentPage,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoCards from "components/Todo/TodoCards/todo-cards";
import EmptyViews from "components/Todo/EmptyViews/empty-views";
import Pagination from "components/Todo/Pagination/pagination";
import { sanitizeInput } from "helpers/sanitizeInput";
import {
  TASK_PER_PAGE,
  LABEL_LOAD_MORE,
  LABEL_SHOW_LESS,
} from "common/constants";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateButtonClicked = useSelector(
    (state) => state.handleButtonClick.isCreateButtonClicked
  );

  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const currentPage = useSelector(
    (state) => state.handleCurrentPage.currentPage
  );

  const { length } = todoList;
  const currentTask = TASK_PER_PAGE * currentPage - isCreateButtonClicked;
  const currentTodoList = todoList.slice(0, currentTask);
  const showLoadMoreButton = length > currentTask;
  const showSeeLessButton = length + isCreateButtonClicked > TASK_PER_PAGE;
  const showPagination = showLoadMoreButton || showSeeLessButton;

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

  function handleCancelEditTask(taskId, inputTask) {
    dispatch(editTodo(taskId, inputTask));
  }

  function handlePaginationClick(buttonText) {
    if (buttonText === LABEL_LOAD_MORE) {
      dispatch(handleCurrentPage(currentPage + 1));
    } else {
      dispatch(handleCurrentPage(1));
    }
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
            {todoList.length ? (
              <TodoCards
                todoList={currentTodoList}
                onDeleteTask={handleDeleteTask}
                onCompleteTask={handleCompleteTask}
                onEditClick={handleEditClick}
                onEditTask={handleEditTask}
                onCancelEditTask={handleCancelEditTask}
              />
            ) : (
              !isCreateButtonClicked && <EmptyViews />
            )}
          </div>
          {showPagination && (
            <div className="todo__pagination">
              <Pagination
                buttonText={
                  showLoadMoreButton ? LABEL_LOAD_MORE : LABEL_SHOW_LESS
                }
                onPaginationClick={handlePaginationClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
