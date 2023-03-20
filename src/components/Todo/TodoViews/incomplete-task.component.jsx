import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const IncompleteTask = ({ handleDeleteTask, taskId }) => {
  const handleDelete = () => {
    handleDeleteTask(taskId);
  };

  return (
    <div className="todo-view__btns">
      <button>
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

IncompleteTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default IncompleteTask;
