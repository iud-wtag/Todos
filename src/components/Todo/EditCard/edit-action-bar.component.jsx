import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";
import { ALT_COMPLETE_BUTTON, ALT_DELETE_BUTTON } from "common/constants";

const EditActionBar = ({
  todo,
  editedTask,
  handleEditTask,
  handleCompleteTask,
  handleEditCancelTask,
}) => {
  const { id, task, date } = todo;

  return (
    <div className="edit-card__btn-section">
      <button
        className="todo-save__btn white-back__btn"
        onClick={() => handleEditTask(id, editedTask)}
      >
        Save
      </button>
      <button
        className="todo-complete__btn"
        onClick={() => handleCompleteTask(id, date, editedTask)}
      >
        <img src={checkButton} alt={ALT_COMPLETE_BUTTON} />
      </button>
      <button
        className="todo-delete__btn"
        onClick={() => handleEditCancelTask(id, task)}
      >
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditCancelTask: PropTypes.func.isRequired,
};

export default EditActionBar;
