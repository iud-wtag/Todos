import React from "react";
import PropTypes from "prop-types";

const CompletedController = ({ handleDeleteTask, taskID, completeTime }) => {
  return (
    <div className="todo-crud-btn complete-btns">
      <button onClick={() => handleDeleteTask(taskID)}>
        <img src="assets/images/delete.png" alt="Delete button" />
      </button>
      <p className="complete-msg">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  );
};

CompletedController.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default CompletedController;
