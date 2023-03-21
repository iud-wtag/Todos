import React from "react";
import PropTypes from "prop-types";
import TodoActionBar from "components/Todo/TodoViews/todo-action-bar.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";

const TodoViews = ({ todoList, handleDeleteTask }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card todo-view-card" key={todo.id}>
        <TodoDetails todo={todo} />
        <TodoActionBar handleDeleteTask={handleDeleteTask} taskId={todo.id} />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default TodoViews;
