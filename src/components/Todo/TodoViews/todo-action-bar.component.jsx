import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const TodoActionBar = ({
  handleDeleteTask,
  handleCompleteTask,
  taskId,
  startDate,
}) => {
  const handleDelete = () => {
    handleDeleteTask(taskId);
  };
  const handleComplete = () => {
    handleCompleteTask(taskId, startDate);
  };

  return (
    <div className="todo-view__btns incomplete-btns">
      <button onClick={handleComplete}>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button>
        <img src={editButton} alt={EDIT_BUTTON} />
      </button>
      <button onClick={handleDelete}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

TodoActionBar.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default TodoActionBar;
