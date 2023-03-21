import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TodoDetails = ({ todo }) => {
  const titleClasses = classNames("todo-view__title", {
    "task-complete": todo.isTaskComplete,
  });
  return (
    <div className="todo-view__details">
      <h3 className={titleClasses}>{todo.task}</h3>
      <p className="todo-view__create-time">
        Created At: {todo.date.toLocaleDateString("de-DE")}
      </p>
    </div>
  );
};

TodoDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoDetails;
