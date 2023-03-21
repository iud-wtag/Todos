import React from "react";
import PropTypes from "prop-types";

const TodoDetails = ({ todo }) => {
  return (
    <div className="todo-view__details">
      <h3 className="todo-view__title">{todo.task}</h3>
      <p className="todo-view__create-time">Created At: {todo.date}</p>
    </div>
  );
};

TodoDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoDetails;
