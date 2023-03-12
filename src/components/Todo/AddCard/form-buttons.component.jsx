import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const FormButtons = ({ handleAddTask, handleCancelClick, isEmptyError }) => {
  return (
    <div className="todo-add-crud">
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
      <button onClick={handleCancelClick}>
        <img src={deleteButton} alt="Delete Btn" />
      </button>
      {isEmptyError && <p className="error">Title is required</p>}
    </div>
  );
};

FormButtons.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  isEmptyError: PropTypes.bool.isRequired,
};

export default FormButtons;
