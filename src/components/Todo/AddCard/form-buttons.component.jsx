import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import { DELETE_BUTTON } from "common/constants";

const FormButtons = ({ handleAddTask, inputTask, isEmptyError }) => {
  const handleAdd = () => {
    handleAddTask(inputTask);
  };
  return (
    <div className="add-card__btn-section">
      <button onClick={handleAdd} className="todo-add__btn">
        Add Task
      </button>
      <button className="todo-delete__btn">
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
      {isEmptyError && <p className="error">Title is required</p>}
    </div>
  );
};

FormButtons.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  isEmptyError: PropTypes.bool.isRequired,
  inputTask: PropTypes.string.isRequired,
};

export default FormButtons;
