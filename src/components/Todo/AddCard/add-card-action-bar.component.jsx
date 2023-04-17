import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import { ALT_DELETE_BUTTON } from "common/constants";

const AddCardActionBar = ({ handleAddTask, inputTask, handleCancelClick }) => {
  return (
    <div className="add-card__btn-section">
      <button
        onClick={() => handleAddTask(inputTask)}
        className="todo-add__btn white-back__btn"
      >
        Add Task
      </button>
      <button className="todo-delete__btn" onClick={handleCancelClick}>
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
    </div>
  );
};

AddCardActionBar.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  inputTask: PropTypes.string.isRequired,
};

export default AddCardActionBar;
