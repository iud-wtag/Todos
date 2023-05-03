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

const TaskIncomplete = ({
  todo,
  onEditClick,
  onDeleteTask,
  onCompleteTask,
}) => {
  const { id, date, task } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleEditClick() {
    onEditClick(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id, date, task);
  }

  return (
    <div className="todo__card-view-btns incomplete-btns">
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
  onEditClick: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default TaskIncomplete;
