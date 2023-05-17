import React from "react";
import PropTypes from "prop-types";
import {
  ICON_CHECK,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";
import { editTodo, completeTodo } from "actions";
import { useDispatch } from "react-redux";
import { sanitizeInput } from "helpers/sanitizeInput";

const EditActionBar = ({ todo, editedTask, onSetEdit }) => {
  const dispatch = useDispatch();
  const { id, task, date } = todo;

  function handleEditTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    onSetEdit(false);
  }

  function handleCompleteTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    dispatch(completeTodo(id, date, sanitizedTask));
    onSetEdit(false);
  }

  function handleCancelEditTask() {
    dispatch(editTodo(id, task));
    onSetEdit(false);
  }

  return (
    <div className="todo__card-edit-btn">
      <button
        className="todo__card-edit-btn__inner btn__bg--white"
        onClick={handleEditTask}
      >
        Save
      </button>
      <button
        className="todo__card-edit-btn__inner"
        onClick={handleCompleteTask}
      >
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button
        className="todo__card-edit-btn__inner"
        onClick={handleCancelEditTask}
      >
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  onSetEdit: PropTypes.func.isRequired,
};

export default EditActionBar;
