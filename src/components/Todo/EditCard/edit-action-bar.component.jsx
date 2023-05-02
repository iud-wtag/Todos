import React from "react";
import PropTypes from "prop-types";
import deleteIcon from "assets/images/delete.png";
import checkIcon from "assets/images/check.png";
import { ALT_TEXT_COMPLETE_TODO, ALT_TEXT_DELETE_TODO } from "common/constants";

const EditActionBar = ({
  todo,
  editedTask,
  onEditTask,
  onCompleteTask,
  onCancelEditTask,
}) => {
  const { id, task, date } = todo;

  function handleEditTask() {
    onEditTask(id, editedTask);
  }

  function handleCompleteTask() {
    onCompleteTask(id, date, editedTask);
  }

  function handleCancelEditTask(params) {
    onCancelEditTask(id, task);
  }

  return (
    <div className="todo__card-edit-btns">
      <button className="todo-save__btn btn__bg-white" onClick={handleEditTask}>
        Save
      </button>
      <button className="todo-complete__btn" onClick={handleCompleteTask}>
        <img src={checkIcon} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button className="todo-delete__btn" onClick={handleCancelEditTask}>
        <img src={deleteIcon} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onCancelEditTask: PropTypes.func.isRequired,
};

export default EditActionBar;
