import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";
import { COMPLETE_BUTTON, DELETE_BUTTON } from "common/constants";

const EditActionBar = ({
  todo,
  editedTask,
  handleEditTask,
  handleCompleteTask,
}) => {
  const { id, task, date } = todo;
  const handleEdit = () => {
    handleEditTask(id, editedTask);
  };
  const handleComplete = () => {
    handleCompleteTask(id, date);
    handleEditTask(id, editedTask);
  };
  const handleCancel = () => {
    handleEditTask(id, task);
  };
  return (
    <div className="edit-card__btn-section">
      <button className="todo-save__btn" onClick={handleEdit}>
        Save
      </button>
      <button className="todo-complete__btn" onClick={handleComplete}>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button className="todo-delete__btn" onClick={handleCancel}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default EditActionBar;
