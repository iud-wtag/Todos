import React from "react";
import PropTypes from "prop-types";

const TodoDetails = ({ list }) => {
  return (
    <div className="todo-view__details">
      <h3 className="todo-view__title">{list.data}</h3>
      <p className="todo-view__create-time">Created At: {list.date}</p>
    </div>
  );
};

TodoDetails.propTypes = {
  list: PropTypes.object.isRequired,
};

export default TodoDetails;
