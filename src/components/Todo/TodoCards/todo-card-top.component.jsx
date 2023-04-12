import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { formatDate } from "helpers/fortmatDate";

const TodoCardTop = ({ todo }) => {
  const { task, date } = todo;
  const formattedDate = formatDate(date);

  return (
    <div className="todo-view__details">
      <h3
        className={`todo-view__title ${classNames({
          "task-complete": todo.isTaskComplete,
        })}`}
      >
        {task}
      </h3>
      <p className="todo-view__create-time">Created At: {formattedDate}</p>
    </div>
  );
};

TodoCardTop.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCardTop;
