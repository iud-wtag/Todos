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

const TodoActionBar = ({ onDeleteTask, todo }) => {
  const { id } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className="todo__card-view-btns">
      <button>
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

TodoActionBar.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoActionBar;
