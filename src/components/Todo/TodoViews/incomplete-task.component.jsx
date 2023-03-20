import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";

const IncompleteTask = ({
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  taskId,
  startDate,
}) => {
  const handleComplete = () => {
    handleCompleteTask(taskId, startDate);
  };
  const handleDelete = () => {
    handleDeleteTask(taskId);
  };
  const handleEdit = () => {
    handleEditClick(taskId);
  };

  return (
    <div className="todo-view__btns incomplete-btns">
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
  handleEditClick: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
};

export default IncompleteTask;
