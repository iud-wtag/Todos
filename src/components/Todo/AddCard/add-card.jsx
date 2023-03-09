import React from "react";
import PropTypes from "prop-types";
import FormButtons from "components/Todo/AddCard/form-buttons.component";

const AddCard = ({
  handleInputChange,
  handleAddTask,
  inputData,
  handleKeyDown,
  handleCancelClick,
}) => {
  return (
    <div className="todo-card add-card">
      <textarea
        className="todo-input"
        type="text"
        id="todo-input"
        onChange={handleInputChange}
        value={inputData}
        autoFocus
        onKeyDown={handleKeyDown}
      ></textarea>

      <FormButtons
        handleAddTask={handleAddTask}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default AddCard;
