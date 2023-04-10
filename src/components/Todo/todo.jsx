import React, { useState, useEffect, useRef } from "react";
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
  searchTodo,
  setLoader,
  handleSearchButton,
} from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoCards from "components/Todo/TodoCards/todo-cards";
import EmptyViews from "components/Todo/EmptyViews/empty-views";
import Pagination from "components/Todo/Pagination/pagination";
import LoaderSpinner from "components/Todo/LoaderSpinner/loader-spinner";
import { sanitizeInput } from "helpers/sanitizeInput";
import {
  TASK_PER_PAGE,
  LOAD_MORE,
  SHOW_LESS,
  INCOMPLETE,
  COMPLETE,
  ALL,
} from "common/constants";
import { debounce } from "helpers/debounce";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const searchValue = useSelector((state) => state.todoReducers.searchValue);

  const [displayTodoList, setDisplayTodoList] = useState(todoList);

  const isCreateButtonClicked = useSelector(
    (state) => state.handleButtonClick.isCreateButtonClicked
  );

  const isSearchButtonClicked = useSelector(
    (state) => state.handleButtonClick.isSearchButtonClicked
  );

  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const currentPage = useSelector(
    (state) => state.handleCurrentPage.currentPage
  );

  const filterState = useSelector(
    (state) => state.handleFilterState.filterState
  );

  const loader = useSelector((state) => state.handleLoader.loader);

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
    handleSearchInput("");
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

  const activeToggle = (btn) => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
  };

  const handleSearchInput = (input) => {
    dispatch(searchTodo(input));
    dispatch(handleCurrentPage(1));
  };

  const handleSearchChange = (e) => {
    dispatch(setLoader(true));
    handleDebounce(e);
  };

  const handleSearch = (e) => {
    handleSearchInput(e.target.value);
    dispatch(setLoader(false));
  };

  const toggleSearchInput = () => {
    handleSearchInput("");
    dispatch(setLoader(false));
    dispatch(handleSearchButton(isSearchButtonClicked));
  };

  const handleDebounce = useRef(debounce(handleSearch), []).current;

  const currentTask = TASK_PER_PAGE * currentPage - isCreateButtonClicked;
  const currentTodoList = displayTodoList.slice(0, currentTask);

  const showLoadMoreButton = displayTodoList.length > currentTask;
  const showSeeLessButton =
    displayTodoList.length + isCreateButtonClicked > TASK_PER_PAGE;
  const showPagination = showLoadMoreButton || showSeeLessButton;

  useEffect(() => {
    let filteredTodos;
    document.querySelectorAll(".filter-btn__btn").forEach((btn) => {
      if (filterState === ALL && btn.innerHTML === ALL) {
        activeToggle(btn);
        filteredTodos = todoList;
      } else if (filterState === INCOMPLETE && btn.innerHTML === INCOMPLETE) {
        activeToggle(btn);
        filteredTodos = todoList.filter((todo) => !todo.isTaskComplete);
      } else if (filterState === COMPLETE && btn.innerHTML === COMPLETE) {
        activeToggle(btn);
        filteredTodos = todoList.filter((todo) => todo.isTaskComplete);
      }
    });
    const searchedTodos = filteredTodos.filter((todo) =>
      todo.task.toLowerCase().includes(searchValue.toLowerCase())
    );
    setDisplayTodoList(searchedTodos);
  }, [filterState, todoList, searchValue]);

  return (
    <div className="todo">
      <Navbar
        handleSearchChange={handleSearchChange}
        toggleSearchInput={toggleSearchInput}
        isSearchButtonClicked={isSearchButtonClicked}
      />
      <div
        className={`todo__container todo__section ${loader && "todo_disabled"}`}
      >
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
      {loader && <LoaderSpinner />}
    </div>
  );
};

export default Todo;
