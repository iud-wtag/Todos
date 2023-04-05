import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleCreateBtn, handleEmptyError } from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoViews from "components/Todo/TodoViews/todo-views";
import { sanitizeInput } from "helpers/sanitizeInput";

const Todo = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateButtonClicked = useSelector(
    (state) => state.handleButtonClick.isCreateButtonClicked
  );
  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const toggleEmptyError = (toggleValue) => {
    dispatch(handleEmptyError(toggleValue));
  };

  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateButtonClicked));
  };

  const handleAddTask = (inputTask) => {
    const sanitizedData = sanitizeInput(inputTask);
    if (sanitizedData.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedData));
    handleCreateClick();
    toggleEmptyError(false);
  };

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container todo__section">
        <TopBar
          handleCreateClick={handleCreateClick}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <div className="todo__board">
          {isCreateButtonClicked && (
            <AddCard
              handleAddTask={handleAddTask}
              isEmptyError={isEmptyError}
              toggleEmptyError={toggleEmptyError}
            />
          )}
          <TodoViews todoList={todoList} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
