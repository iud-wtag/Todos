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

const TaskIncomplete = ({ onDeleteTask, onCompleteTask }) => {
  return (
    <div className="todo__card-view-btn">
      <button onClick={onCompleteTask}>
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button>
        <img src={ICON_EDIT} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button onClick={onDeleteTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

TaskIncomplete.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default TaskIncomplete;
