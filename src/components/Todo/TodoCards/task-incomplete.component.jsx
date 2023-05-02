import React from "react";
import PropTypes from "prop-types";
import checkIcon from "assets/images/check.png";
import editIcon from "assets/images/edit.png";
import deleteIcon from "assets/images/delete.png";
import {
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
        <img src={checkIcon} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button>
        <img src={editIcon} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button onClick={handleDeleteTask}>
        <img src={deleteIcon} alt={ALT_TEXT_DELETE_TODO} />
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
