import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, completeTodo, deleteTodo, handleCreateBtn } from "actions";
import TopBar from "components/Todo/TopBar/TopBar";
import AddCard from "components/Todo/AddCard/AddCard";
import TodoViews from "components/Todo/TodoViews/TodoViews";

const Todo = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateBtnClicked = useSelector(
    (state) => state.handleTokens.isCreateBtnClicked
  );
  const isEditBtnClicked = useSelector(
    (state) => state.handleTokens.isEditBtnClicked
  );

  const handleCreateClick = () => {
    dispatch(handleCreateBtn(isCreateBtnClicked));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setInputData("");
    handleCreateClick();
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTask = (e) => {
    if (inputData.trim()) {
      dispatch(addTodo(inputData));
      setInputData("");
      handleCreateClick();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleDeleteTask = (taskID) => {
    dispatch(deleteTodo(taskID));
  };

  const handleCompleteTask = (taskID) => {
    dispatch(completeTodo(taskID));
  };
  const handleEditTask = (taskID) => {
    // console.log("CLOICLCLOSDLAS");
  };

  return (
    <>
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
              handleCancelClick={handleCancelClick}
            />
          )}
          <TodoViews
            todoList={todoList}
            handleDeleteTask={handleDeleteTask}
            handleCompleteTask={handleCompleteTask}
            handleEditTask={handleEditTask}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
