import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateButton, handleEmptyError } from "actions";
import Navbar from "components/Todos/Navbar/navbar";
import TopBar from "components/Todos/Topbar/top-bar";
import AddCard from "components/Todos/AddCard/add-card";
import Todo from "components/Todos/Todo/todo";
import EmptyViews from "components/Todos/EmptyViews/empty-views";
import Pagination from "components/Todos/Pagination/pagination";
import LoaderSpinner from "components/Todos/LoaderSpinner/loader-spinner";
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
  const searchValue = useSelector((state) => state.todoReducers.searchValue);

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

  const loader = useSelector((state) => state.handleLoader.loader);

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

    const searchedTodos = filteredTodos.filter((todo) =>
      todo.task.toLowerCase().includes(searchValue.toLowerCase())
    );

    setTodos(searchedTodos);
  }, [filterType, todoList, searchValue]);

  return (
    <div className="todo">
      <Navbar />
      <div className={`todo__container ${loader && "todo_disabled"}`}>
        <div className="todo__wrapper">
          <TopBar
            onCreate={handleCreate}
            onActiveFilterType={setActiveFilterType}
            activeFilterType={activeFilterType}
            isCreateButtonClicked={isCreateButtonClicked}
          />
          <div className="todo__card__wrapper">
            {isCreateButtonClicked && (
              <AddCard
                isEmptyError={isEmptyError}
                onCreate={handleCreate}
                toggleEmptyError={toggleEmptyError}
                onActiveFilterType={setActiveFilterType}
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
      {loader && <LoaderSpinner />}
    </div>
  );
};

export default Todos;
