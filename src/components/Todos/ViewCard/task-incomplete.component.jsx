import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "actions";
import {
  ICON_CHECK,
  ICON_EDIT,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const TaskIncomplete = ({ todo, onSetEdit }) => {
  const dispatch = useDispatch();

  const { id, date, task } = todo;

  function handleDeleteTask() {
    dispatch(deleteTodo(id));
  }

  function handleCompleteTask() {
    dispatch(completeTodo(id, date, task));
    onSetEdit(false);
  }

  function handleEditClick() {
    onSetEdit(true);
  }

  return (
    <div className="todo__card-view-btn">
      <button onClick={handleCompleteTask}>
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button onClick={handleEditClick}>
        <img src={ICON_EDIT} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button onClick={handleDeleteTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

TaskIncomplete.propTypes = {
  todo: PropTypes.object.isRequired,
  onSetEdit: PropTypes.func.isRequired,
};

export default TaskIncomplete;
