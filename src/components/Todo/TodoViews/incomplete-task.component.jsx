import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";

const IncompleteController = ({
  handleDeleteTask,
  handleCompleteTask,
  taskID,
}) => {
  const handleComplete = () => {
    handleCompleteTask(taskID);
  };
  const handleDelete = () => {
    handleDeleteTask(taskID);
  };

  return (
<<<<<<<< HEAD:src/components/Todo/TodoViews/IncompleteController.jsx
    <div className="todo-crud-btn incomplete-btns">
      <button onClick={handleComplete}>
        <img src="assets/images/check.png" alt="Complete button" />
========
    <div className="todo-crud-btn">
      <button>
        <img src={checkButton} alt="Complete button" />
>>>>>>>> STEP-3-Delete-Tasks:src/components/Todo/TodoViews/incomplete-task.component.jsx
      </button>
      <button>
        <img src={editButton} alt="Edit button" />
      </button>
      <button onClick={handleDelete}>
        <img src={deleteButton} alt="Delete button" />
      </button>
    </div>
  );
};

IncompleteController.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default IncompleteController;
