import React from "react";
import PropTypes from "prop-types";

const TodoCardTop = ({ todo }) => {
  const today = todo.date;
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;

  return (
    <div className="todo-view__details">
      <h3 className="todo-view__title">{todo.task}</h3>
      <p className="todo-view__create-time">Created At: {formattedDate}</p>
    </div>
  );
};

TodoCardTop.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCardTop;
