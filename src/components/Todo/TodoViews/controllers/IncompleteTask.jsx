import React from "react";
import PropTypes from "prop-types";

const IncompleteTask = ({ handleDeleteTask, taskID }) => {
  const handleDelete = () => {
    handleDeleteTask(taskID);
  };
  return (
    <div className="todo-crud-btn">
      <button>
        <img src="assets/images/check.png" alt="Complete button" />
      </button>
      <button>
        <img src="assets/images/edit.png" alt="Edit button" />
      </button>
      <button onClick={handleDelete}>
        <img src="assets/images/delete.png" alt="Delete button" />
      </button>
    </div>
  );
};

IncompleteTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default IncompleteTask;
