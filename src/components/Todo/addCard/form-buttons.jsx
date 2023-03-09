import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";

const FormButtons = ({ handleAddTask }) => {
  return (
    <div className="todo-add-crud">
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
      <button>
        <img src={deleteButton} alt="Delete Btn" />
      </button>
    </div>
  );
};

FormButtons.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default FormButtons;
