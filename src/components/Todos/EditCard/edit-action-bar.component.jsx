import React from "react";
import PropTypes from "prop-types";
import {
  ICON_CHECK,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_DELETE_TODO,
  MESSAGE_REQUIRED_TITLE,
  MESSAGE_EDIT_TASK,
  MESSAGE_COMPLETE_TASK,
  MESSAGE_ERROR,
} from "common/constants";
import { editTodo, completeTodo } from "actions";
import { useDispatch } from "react-redux";
import { sanitizeInput } from "helpers/sanitizeInput";
import {
  showErrorToast,
  showRequiredToast,
  showSuccessToast,
} from "common/notification";

const EditActionBar = ({ todo, editedTask, onSetEdit }) => {
  const dispatch = useDispatch();
  const { id, task, date } = todo;

  function handleEditTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      showRequiredToast(MESSAGE_REQUIRED_TITLE);
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    onSetEdit(false);
    showSuccessToast(MESSAGE_EDIT_TASK);
  }

  function handleCompleteTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      showRequiredToast(MESSAGE_REQUIRED_TITLE);
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    dispatch(completeTodo(id, date, sanitizedTask));
    onSetEdit(false);
    showSuccessToast(MESSAGE_COMPLETE_TASK);
  }

  function handleCancelEditTask() {
    dispatch(editTodo(id, task));
    onSetEdit(false);
    showErrorToast(MESSAGE_ERROR);
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
