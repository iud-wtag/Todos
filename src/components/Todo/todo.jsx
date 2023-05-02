import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleCreateButton, handleEmptyError } from "actions";
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

  function handleAddTask(inputTask) {
    const sanitizedData = sanitizeInput(inputTask);
    if (sanitizedData.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedData));
    handleCreateClick();
    toggleEmptyError(false);
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
                toggleEmptyError={toggleEmptyError}
              />
            )}
            <TodoCards todoList={todoList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
