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
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isTaskComplete: PropTypes.bool.isRequired,
    completeTime: PropTypes.number,
  }),
};

Todo.defaultProps = {
  completeTime: null,
};

export default Todo;
