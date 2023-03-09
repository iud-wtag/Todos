import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const FormButtons = ({ handleAddTask, handleCancelClick }) => {
  return (
    <div className="todo-add-crud">
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
      <button onClick={handleCancelClick}>
        <img src={deleteButton} alt="Delete Btn" />
      </button>
    </div>
  );
};

FormButtons.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default FormButtons;
