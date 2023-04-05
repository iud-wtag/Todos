import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  handleCreateButton,
  deleteTodo,
  completeTodo,
  handleEditButton,
  handleEmptyError,
  editTodo,
  handleCurrentPage,
  filterTodo,
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
  LOAD_MORE,
  SHOW_LESS,
  INCOMPLETE,
  COMPLETE,
  ALL,
} from "common/constants";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const [displayTodoList, setDisplayTodoList] = useState(todoList);

  const isCreateButtonClicked = useSelector(
    (state) => state.handleButtonClick.isCreateButtonClicked
  );

  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const currentPage = useSelector(
    (state) => state.handleCurrentPage.currentPage
  );

  const filterState = useSelector(
    (state) => state.handleFilterState.filterState
  );

  const currentTask = TASK_PER_PAGE * currentPage - isCreateButtonClicked;
  const currentTodoList = displayTodoList.slice(0, currentTask);
  const showLoadMoreButton = displayTodoList.length > currentTask;
  const showSeeLessButton =
    displayTodoList.length + isCreateButtonClicked > TASK_PER_PAGE;
  const showPagination = showLoadMoreButton || showSeeLessButton;

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
    handleFilterClick(ALL);
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

  const handleFilterClick = (filterState) => {
    dispatch(filterTodo(filterState));
    dispatch(handleCurrentPage(1));
  };

  useEffect(() => {
    (() => {
      console.log("Caller");
      document.querySelectorAll(".filter-btn__btn").forEach((btn) => {
        if (filterState === ALL && btn.innerHTML === ALL) {
          document.querySelector(".active").classList.remove("active");
          btn.classList.add("active");
          setDisplayTodoList(todoList);
        } else if (filterState === INCOMPLETE && btn.innerHTML === INCOMPLETE) {
          document.querySelector(".active").classList.remove("active");
          btn.classList.add("active");
          setDisplayTodoList(
            todoList.filter((todo) => todo.isTaskComplete === false)
          );
        } else if (filterState === COMPLETE && btn.innerHTML === COMPLETE) {
          document.querySelector(".active").classList.remove("active");
          btn.classList.add("active");
          setDisplayTodoList(
            todoList.filter((todo) => todo.isTaskComplete === true)
          );
        }
      });
      if (isCreateButtonClicked) {
        handleCreateClick();
      }
    })();
  }, [filterState, todoList]);

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container todo__section">
        <TopBar
          handleCreateClick={handleCreateClick}
          handleFilterClick={handleFilterClick}
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
          {currentTodoList.length ? (
            <TodoCards
              todoList={currentTodoList}
              handleDeleteTask={handleDeleteTask}
              handleCompleteTask={handleCompleteTask}
              handleEditClick={handleEditClick}
              handleEditTask={handleEditTask}
            />
          ) : (
            !isCreateButtonClicked && <EmptyViews />
          )}
        </div>
        {showPagination && (
          <div className="todo__pagination">
            <Pagination
              buttonText={showLoadMoreButton ? LOAD_MORE : SHOW_LESS}
              handlePaginationClick={handlePaginationClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
