import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import { ALT_DELETE_BUTTON } from "common/constants";

const AddCardActionBar = ({
  onAddTask,
  inputTask,
  isEmptyError,
  onCancelClick,
}) => {
  return (
    <div className="todo__card-add-btns">
      <button
        onClick={() => onAddTask(inputTask)}
        className="todo-add__btn btn__bg-white"
      >
        Add Task
      </button>
      <button className="todo-delete__btn" onClick={onCancelClick}>
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
      {isEmptyError && <p className="error">Title is required</p>}
    </div>
  );
};

AddCardActionBar.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  isEmptyError: PropTypes.bool.isRequired,
  inputTask: PropTypes.string.isRequired,
};

export default AddCardActionBar;
