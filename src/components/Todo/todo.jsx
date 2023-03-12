import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, handleCreateBtn, handleEmptyError } from "actions";
import Navbar from "components/Todo/Navbar/navbar";
import TopBar from "components/Todo/Topbar/top-bar";
import AddCard from "components/Todo/AddCard/add-card";
import TodoViews from "components/Todo/TodoViews/todo-views";

const Todo = () => {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");
  // const [isEmptyError, setIsEmptyError] = useState(false);

  const todoList = useSelector((state) => state.todoReducers.list);
  const isCreateBtnClicked = useSelector(
    (state) => state.handleTokens.isCreateBtnClicked
  );

  const isEmptyError = useSelector((state) => state.handleErrors.isEmptyError);

  const toggleEmptyError = () => {
    dispatch(handleEmptyError(isEmptyError));
  };

  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };
  const handleInputChange = (e) => {
    setInputData(e.target.value);
    if (isEmptyError) toggleEmptyError();
  };
  const handleAddTask = (e) => {
    if (inputData.trim()) {
      dispatch(addTodo(inputData));
      setInputData("");
      handleCreateClick();

      if (isEmptyError) toggleEmptyError();
    } else {
      if (!isEmptyError) toggleEmptyError();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <Navbar />
      <div className="container todo-section">
        <TopBar
          handleCreateClick={handleCreateClick}
          isCreateBtnClicked={isCreateBtnClicked}
        />
        <div className="todo-board">
          {isCreateBtnClicked && (
            <AddCard
              handleInputChange={handleInputChange}
              handleAddTask={handleAddTask}
              handleKeyDown={handleKeyDown}
              inputData={inputData}
              isEmptyError={isEmptyError}
            />
          )}
          <TodoViews todoList={todoList} />
        </div>
      </div>
    </>
  );
};

export default Todo;
