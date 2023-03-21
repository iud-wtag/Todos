import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/incomplete-task.component";
import TodoDetails from "components/Todo/TodoViews/todo-details.component";

const TodoViews = ({ todoList }) => {
  return todoList.map((todo) => {
    return (
      <div className="todo-card todo-view-card" key={todo.id}>
        <TodoDetails todo={todo} />
        <IncompleteTask />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoViews;
