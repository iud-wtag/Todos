import React from "react";
import PropTypes from "prop-types";
import ViewCard from "components/Todos/ViewCard/view-card";

const Todo = ({ todo }) => {
  return (
    <div className="todo__card-view">
      <ViewCard todo={todo} />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    task: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default Todo;
