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

const EditActionBar = ({ todo, editedTask, setIsEdit }) => {
  const dispatch = useDispatch();
  const { id, task, date } = todo;

  function handleEditTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    setIsEdit(false);
  }

  function handleCompleteTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    dispatch(completeTodo(id, date, sanitizedTask));
    setIsEdit(false);
  }

  function handleCancelEditTask() {
    dispatch(editTodo(id, task));
    setIsEdit(false);
  }

  return (
    <div className="todo__card-edit-btns">
      <button className="todo-save__btn btn__bg-white" onClick={handleEditTask}>
        Save
      </button>
      <button className="todo-complete__btn" onClick={handleCompleteTask}>
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button className="todo-delete__btn" onClick={handleCancelEditTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

EditActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  editedTask: PropTypes.string.isRequired,
  setIsEdit: PropTypes.func.isRequired,
};

export default EditActionBar;
