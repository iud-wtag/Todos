import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ViewDetails = ({ todo }) => {
  const today = todo.date;
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  const titleClasses = classNames("todo-view__title", {
    "task-complete": todo.isTaskComplete,
  });

  return (
    <div className="todo-view__details">
      <h3 className={titleClasses}>{todo.task}</h3>
      <p className="todo-view__create-time">Created At: {formattedDate}</p>
    </div>
  );
};

ViewDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewDetails;
