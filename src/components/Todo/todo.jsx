import React, { useState, useEffect } from "react";
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
  LABEL_LOAD_MORE,
  LABEL_SHOW_LESS,
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const [displayTodoList, setDisplayTodoList] = useState(todoList);
  const [activeFilterTypes, setActiveFilterTypes] = useState(LABEL_FILTER_ALL);

  const isCreateButtonClicked = useSelector(
    (state) => state.buttonClickReducers.isCreateButtonClicked
  );
  const isEmptyError = useSelector((state) => state.errorReducers.isEmptyError);

  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  const filterType = useSelector(
    (state) => state.todoFilterReducers.filterType
  );

  const { length } = displayTodoList;
  const currentTask = TASK_PER_PAGE * currentPage - isCreateButtonClicked;
  const currentTodoList = displayTodoList.slice(0, currentTask);
  const showLoadMoreButton = length > currentTask;
  const showSeeLessButton = length + isCreateButtonClicked > TASK_PER_PAGE;
  const showPagination = showLoadMoreButton || showSeeLessButton;

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
    handleFilter(LABEL_FILTER_ALL);
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

  function handleFilter(filterType) {
    dispatch(filterTodo(filterType));
    dispatch(handleCurrentPage(1));
    setActiveFilterTypes(filterType);
  }

  useEffect(() => {
    let filteredTodos;
    document
      .querySelectorAll(".todo__top__btn-filter__inner")
      .forEach((btn) => {
        if (
          filterType === LABEL_FILTER_ALL &&
          btn.innerHTML === LABEL_FILTER_ALL
        ) {
          filteredTodos = todoList;
        } else if (
          filterType === LABEL_FILTER_INCOMPLETE &&
          btn.innerHTML === LABEL_FILTER_INCOMPLETE
        ) {
          filteredTodos = todoList.filter((todo) => !todo.isTaskComplete);
        } else if (
          filterType === LABEL_FILTER_COMPLETE &&
          btn.innerHTML === LABEL_FILTER_COMPLETE
        ) {
          filteredTodos = todoList.filter((todo) => todo.isTaskComplete);
        }
      });
    setDisplayTodoList(filteredTodos);
  }, [filterType, todoList]);

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container">
        <div className="todo__wrapper">
          <TopBar
            onFilter={handleFilter}
            onCreate={handleCreate}
            activeFilterTypes={activeFilterTypes}
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
            {currentTodoList.length ? (
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
            <Pagination
              buttonText={
                showLoadMoreButton ? LABEL_LOAD_MORE : LABEL_SHOW_LESS
              }
              onPaginationClick={handlePaginationClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
