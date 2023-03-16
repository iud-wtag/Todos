import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const FormButtons = ({ handleAddTask, handleCancelClick, isEmptyError }) => {
  return (
    <div className="add-card__btn-section">
      <button onClick={handleAddTask} className="todo-add__btn">
        Add Task
      </button>
      <button className="todo-delete__btn" onClick={handleCancelClick}>
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
