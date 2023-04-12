import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import { DELETE_BUTTON } from "common/constants";

const AddCardActionBar = ({ handleAddTask, inputTask, handleCancelClick }) => {
  const handleAdd = () => {
    handleAddTask(inputTask);
  };
  return (
    <div className="add-card__btn-section">
      <button onClick={handleAdd} className="todo-add__btn white-back__btn">
        Add Task
      </button>
      <button className="todo-delete__btn" onClick={handleCancelClick}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
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
