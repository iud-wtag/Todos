import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";

const EditButtons = ({
  handleEditTask,
  editData,
  taskID,
  handleCompleteTask,
  startDate,
  taskData,
}) => {
  const handleEdit = () => {
    handleEditTask(taskID, editData);
  };
  const handleComplete = () => {
    handleCompleteTask(taskID, startDate);
    handleEditTask(taskID, editData);
  };
  const handleCancel = () => {
    handleEditTask(taskID, taskData);
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
  taskID: PropTypes.string.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
  taskData: PropTypes.string.isRequired,
};

export default EditButtons;
