import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";
import { ALT_COMPLETE_BUTTON, ALT_DELETE_BUTTON } from "common/constants";

const EditActionBar = ({
  todo,
  editedTask,
  onEditTask,
  onCompleteTask,
  onEditCancelTask,
}) => {
  const { id, task, date } = todo;

  return (
    <div className="todo__card-edit-btns">
      <button
        className="todo-save__btn btn__bg-white"
        onClick={() => onEditTask(id, editedTask)}
      >
        Save
      </button>
      <button
        className="todo-complete__btn"
        onClick={() => onCompleteTask(id, date, editedTask)}
      >
        <img src={checkButton} alt={ALT_COMPLETE_BUTTON} />
      </button>
      <button
        className="todo-delete__btn"
        onClick={() => onEditCancelTask(id, task)}
      >
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditCancelTask: PropTypes.func.isRequired,
};

export default EditActionBar;
