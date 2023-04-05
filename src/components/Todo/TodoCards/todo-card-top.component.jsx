import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

<<<<<<<< HEAD:src/components/Todo/ViewCard/view-details.component.jsx
const ViewDetails = ({ todo }) => {
========
const TodoCardTop = ({ todo }) => {
>>>>>>>> STEP-3-Delete-Tasks:src/components/Todo/TodoCards/todo-card-top.component.jsx
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

<<<<<<<< HEAD:src/components/Todo/ViewCard/view-details.component.jsx
ViewDetails.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewDetails;
========
TodoCardTop.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoCardTop;
>>>>>>>> STEP-3-Delete-Tasks:src/components/Todo/TodoCards/todo-card-top.component.jsx
