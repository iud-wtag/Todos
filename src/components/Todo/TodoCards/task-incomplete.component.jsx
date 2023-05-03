import React from "react";
import PropTypes from "prop-types";
import {
  ICON_CHECK,
  ICON_EDIT,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const TaskIncomplete = ({ todo, onDeleteTask, onCompleteTask }) => {
  const { id, date } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id, date);
  }

  return (
    <div className="todo__card-view-btns incomplete-btns">
      <button onClick={handleCompleteTask}>
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button>
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
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default TaskIncomplete;
