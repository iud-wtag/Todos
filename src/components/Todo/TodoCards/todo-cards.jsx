import React from "react";
import PropTypes from "prop-types";
import TodoActionBar from "components/Todo/TodoCards/todo-action-bar.component";
import TodoCardTop from "components/Todo/TodoCards/todo-card-top.component";

const TodoCards = ({ todoList, handleDeleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card todo-view-card" key={todo.id}>
        <TodoCardTop todo={todo} />
        <TodoActionBar handleDeleteTask={handleDeleteTask} taskId={todo.id} />
      </div>
    );
  });
};

TodoCards.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TodoCards;
