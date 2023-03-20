import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const CompletedTask = ({ handleDeleteTask, taskId, completeTime }) => {
  const handleDelete = () => {
    handleDeleteTask(taskId);
  };
  return (
    <div className="todo-view__btns complete-btns">
      <button onClick={handleDelete}>
        <img src={deleteButton} alt="Delete button" />
      </button>
      <p className="complete-msg">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  );
};

CompletedTask.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default CompletedTask;
