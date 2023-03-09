import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const CompletedTask = ({ handleDeleteTask, taskID, completeTime }) => {
  return (
    <div className="todo-crud-btn complete-btns">
      <button onClick={() => handleDeleteTask(taskID)}>
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
  taskID: PropTypes.string.isRequired,
};

export default CompletedTask;
