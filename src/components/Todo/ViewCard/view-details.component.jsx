import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { formatDate } from "helpers/fortmatDate";

const ViewDetails = ({ todo }) => {
  const { task, date } = todo;
  const formattedDate = formatDate(date);

  const titleClasses = classNames("todo-view__title", {
    "task-complete": todo.isTaskComplete,
  });

  return (
    <div className="todo-view__details">
      <h3 className={titleClasses}>{task}</h3>
      <p className="todo-view__create-time">Created At: {formattedDate}</p>
    </div>
  );
};

ViewDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewDetails;
