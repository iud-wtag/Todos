import React from "react";
import PropTypes from "prop-types";
import { ICON_DELETE, ALT_TEXT_DELETE_TODO } from "common/constants";

const AddCardActionBar = ({
  inputTask,
  isEmptyError,
  onAddTask,
  onCancelTask,
}) => {
  function handleAddTask() {
    onAddTask(inputTask);
  }
  return (
    <div className="todo__card-add-btn">
      <button
        onClick={handleAddTask}
        className="todo__card-add-btn__inner btn__bg--white"
      >
        Add Task
      </button>
      <button className="todo__card-add-btn__inner" onClick={onCancelTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
      {isEmptyError && <p className="error">Title is required</p>}
    </div>
  );
};

AddCardActionBar.propTypes = {
  isEmptyError: PropTypes.bool.isRequired,
  inputTask: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancelTask: PropTypes.func.isRequired,
};

export default AddCardActionBar;
