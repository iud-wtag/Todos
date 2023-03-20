import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";

const EditButtons = ({
  handleEditTask,
  editData,
  taskId,
  handleCompleteTask,
  startDate,
  task,
}) => {
  const handleEdit = () => {
    handleEditTask(taskId, editData);
  };
  const handleComplete = () => {
    handleCompleteTask(taskId, startDate);
    handleEditTask(taskId, editData);
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
        <img src={checkButton} alt="Complete Button" onClick={handleComplete} />
      </button>
      <button className="todo-delete__btn">
        <img src={deleteButton} alt="Delete Button" onClick={handleCancel} />
      </button>
    </div>
  );
};

EditButtons.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
  editData: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
  task: PropTypes.string.isRequired,
};

export default EditButtons;
