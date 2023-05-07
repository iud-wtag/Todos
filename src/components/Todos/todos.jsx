import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateButton, handleEmptyError } from "actions";
import Navbar from "components/Todos/Navbar/navbar";
import TopBar from "components/Todos/Topbar/top-bar";
import AddCard from "components/Todos/AddCard/add-card";
import Todo from "components/Todos/Todo/todo";
import EmptyViews from "components/Todos/EmptyViews/empty-views";
import Pagination from "components/Todos/Pagination/pagination";
import {
  TASK_PER_PAGE,
  LABEL_LOAD_MORE,
  LABEL_SHOW_LESS,
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";

const Todos = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

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

  const [todos, setTodos] = useState(todoList);
  const [activeFilterType, setActiveFilterType] = useState(LABEL_FILTER_ALL);

  const currentTask = TASK_PER_PAGE * currentPage - isCreateButtonClicked;
  const currentTodoList = todos.slice(0, currentTask);

  const { length } = todos;
  const showLoadMoreButton = length > currentTask;
  const showSeeLessButton = length + isCreateButtonClicked > TASK_PER_PAGE;
  const showPagination = showLoadMoreButton || showSeeLessButton;

  function toggleEmptyError(toggleValue) {
    dispatch(handleEmptyError(toggleValue));
  }

  function handleCreate() {
    dispatch(handleCreateButton(isCreateButtonClicked));
  }

  useEffect(() => {
    let filteredTodos;
    switch (filterType) {
      case LABEL_FILTER_COMPLETE:
        filteredTodos = todoList.filter((todo) => todo.isTaskComplete);
        break;
      case LABEL_FILTER_INCOMPLETE:
        filteredTodos = todoList.filter((todo) => !todo.isTaskComplete);
        break;
      default:
        filteredTodos = todoList;
    }

    setTodos(filteredTodos);
  }, [filterType, todoList]);

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container">
        <div className="todo__wrapper">
          <TopBar
            onCreate={handleCreate}
            setActiveFilterType={setActiveFilterType}
            activeFilterType={activeFilterType}
            isCreateButtonClicked={isCreateButtonClicked}
          />
          <div className="todo__card__wrapper">
            {isCreateButtonClicked && (
              <AddCard
                isEmptyError={isEmptyError}
                onCreate={handleCreate}
                toggleEmptyError={toggleEmptyError}
                setActiveFilterType={setActiveFilterType}
              />
            )}
            {currentTodoList.length
              ? currentTodoList.map((todo) => {
                  return <Todo key={todo.id} todo={todo} />;
                })
              : !isCreateButtonClicked && <EmptyViews />}
          </div>
          {showPagination && (
            <Pagination
              buttonText={
                showLoadMoreButton ? LABEL_LOAD_MORE : LABEL_SHOW_LESS
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
