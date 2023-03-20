import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";
import { COMPLETE_BUTTON, DELETE_BUTTON } from "common/constants";

const EditButtons = ({
  handleEditTask,
  editedTask,
  taskId,
  handleCompleteTask,
  startDate,
  task,
}) => {
  const handleEdit = () => {
    handleEditTask(taskId, editedTask);
  };
  const handleComplete = () => {
    handleCompleteTask(taskId, startDate);
    handleEditTask(taskId, editedTask);
  };
  const handleCancel = () => {
    handleEditTask(taskId, task);
  };
  return (
    <div className="edit-card__btn-section">
      <button className="todo-save__btn" onClick={handleEdit}>
        Save
      </button>
      <button>
        <img src={checkButton} alt={COMPLETE_BUTTON} onClick={handleComplete} />
      </button>
      <button className="todo-delete__btn">
        <img src={deleteButton} alt={DELETE_BUTTON} onClick={handleCancel} />
      </button>
    </div>
  );
};

EditButtons.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
  editedTask: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
  task: PropTypes.string.isRequired,
};

export default EditButtons;
