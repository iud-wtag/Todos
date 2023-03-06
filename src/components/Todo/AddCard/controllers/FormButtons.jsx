import React from "react";
import PropTypes from "prop-types";

const FormButtons = ({ handleAddTask, handleCancelClick }) => {
  return (
    <div className="todo-add-crud">
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
      <button onClick={handleCancelClick}>
        <img src="assets/images/delete.png" alt="Delete Btn" />
      </button>
    </div>
  );
};

FormButtons.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default FormButtons;
