import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import {
  ALT_COMPLETE_BUTTON,
  ALT_EDIT_BUTTON,
  ALT_DELETE_BUTTON,
} from "common/constants";

const TodoActionBar = ({ onDeleteTask, todo }) => {
  const { id } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className="todo__card-view-btns">
      <button>
        <img src={checkButton} alt={ALT_COMPLETE_BUTTON} />
      </button>
      <button>
        <img src={editButton} alt={ALT_EDIT_BUTTON} />
      </button>
      <button onClick={handleDeleteTask}>
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
    </div>
  );
};

TodoActionBar.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoActionBar;
