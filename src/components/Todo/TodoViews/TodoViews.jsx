import React from "react";
import PropTypes from "prop-types";
import IncompleteTask from "components/Todo/TodoViews/controllers/IncompleteTask";
import TodoDetails from "components/Todo/TodoViews/views/TodoDetails";

const TodoViews = ({ todoList }) => {
  return todoList.map((list) => {
    return (
      <div className="todo-card" key={list.id}>
        <TodoDetails list={list} />
        <IncompleteTask />
      </div>
    );
  });
};

TodoViews.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoViews;
