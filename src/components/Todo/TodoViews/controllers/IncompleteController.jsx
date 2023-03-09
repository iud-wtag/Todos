import React from "react";
import PropTypes from "prop-types";

const IncompleteController = ({
  handleDeleteTask,
  handleCompleteTask,
  handleEditTask,
  taskID,
}) => {
  const handleComplete = () => {
    handleCompleteTask(taskID);
  };
  const handleDelete = () => {
    handleDeleteTask(taskID);
  };
  const handleEdit = () => {
    handleEditTask(taskID);
  };

  return (
    <div className="todo-crud-btn incomplete-btns">
      <button onClick={handleComplete}>
        <img src="assets/images/check.png" alt="Complete button" />
      </button>
      <button onClick={handleEdit}>
        <img src="assets/images/edit.png" alt="Edit button" />
      </button>
      <button onClick={handleDelete}>
        <img src="assets/images/delete.png" alt="Delete button" />
      </button>
    </div>
  );
};

IncompleteController.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default IncompleteController;
