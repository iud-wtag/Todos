import React from "react";
import PropTypes from "prop-types";

const IncompleteController = ({ handleDeleteTask, handleCompleteTask, taskID }) => {
  return (
    <div className="todo-crud-btn incomplete-btns">
      <button onClick={() => handleCompleteTask(taskID)}>
        <img src="assets/images/check.png" alt="Complete button" />
      </button>
      <button>
        <img src="assets/images/edit.png" alt="Edit button" />
      </button>
      <button onClick={() => handleDeleteTask(taskID)}>
        <img src="assets/images/delete.png" alt="Delete button" />
      </button>
    </div>
  );
};

IncompleteController.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default IncompleteController;
