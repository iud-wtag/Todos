import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const TodoDetails = ({ list }) => {
  const titleClasses = classNames("todo-view__title", {
    "task-complete": list.isTaskComplete,
  });
  return (
    <div className="todo-view__details">
      <h3 className={titleClasses}>{list.task}</h3>
      <p className="todo-view__create-time">
        Created At: {list.date.toLocaleDateString("de-DE")}
      </p>
    </div>
  );
};

TodoDetails.propTypes = {
  list: PropTypes.object.isRequired,
};

export default TodoDetails;
