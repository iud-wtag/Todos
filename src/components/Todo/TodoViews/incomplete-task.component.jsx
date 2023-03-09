import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";

const IncompleteTask = ({
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
        <img src={checkButton} alt="Complete button" />
      </button>
      <button onClick={handleEdit}>
        <img src={editButton} alt="Edit button" />
      </button>
      <button onClick={handleDelete}>
        <img src={deleteButton} alt="Delete button" />
      </button>
    </div>
  );
};

IncompleteTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default IncompleteTask;
