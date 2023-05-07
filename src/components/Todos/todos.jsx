import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateButton, handleEmptyError } from "actions";
import Navbar from "components/Todos/Navbar/navbar";
import TopBar from "components/Todos/Topbar/top-bar";
import AddCard from "components/Todos/AddCard/add-card";
import Todo from "components/Todos/Todo/todo";

const Todos = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoReducers.list);

  const isCreateButtonClicked = useSelector(
    (state) => state.buttonClickReducers.isCreateButtonClicked
  );
  const isEmptyError = useSelector((state) => state.errorReducers.isEmptyError);

  function toggleEmptyError(toggleValue) {
    dispatch(handleEmptyError(toggleValue));
  }

  function handleCreate() {
    dispatch(handleCreateButton(isCreateButtonClicked));
  }

  function handleCompleteTask(taskId, startDate) {
    dispatch(completeTodo(taskId, startDate));
  }

  return (
    <div className="todo">
      <Navbar />
      <div className="todo__container">
        <div className="todo__wrapper">
          <TopBar
            onCreate={handleCreate}
            isCreateButtonClicked={isCreateButtonClicked}
          />
          <div className="todo__card__wrapper">
            {isCreateButtonClicked && (
              <AddCard
                isEmptyError={isEmptyError}
                onCreate={handleCreate}
                toggleEmptyError={toggleEmptyError}
              />
            )}
            {todoList.map((todo) => {
              return <Todo key={todo.id} todo={todo} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
