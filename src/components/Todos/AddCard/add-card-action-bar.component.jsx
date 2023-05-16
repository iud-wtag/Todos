import React from "react";
import PropTypes from "prop-types";
import { ICON_DELETE, ALT_TEXT_DELETE_TODO } from "common/constants";

const AddCardActionBar = ({ inputTask, onAddTask, onCancelTask }) => {
  function handleAddTask() {
    onAddTask(inputTask);
  }
  return (
    <div className="todo__card-add-btns">
      <button onClick={handleAddTask} className="todo-add__btn btn__bg-white">
        Add Task
      </button>
      <button className="todo-delete__btn" onClick={onCancelTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

AddCardActionBar.propTypes = {
  inputTask: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancelTask: PropTypes.func.isRequired,
};

export default AddCardActionBar;
