import React from "react";
import PropTypes from "prop-types";
import FormButtons from "components/Todo/AddCard/form-buttons.component";

const AddCard = ({
  handleInputChange,
  handleAddTask,
  inputData,
  handleKeyDown,
  isEmptyError,
}) => {
  return (
    <div className="todo-card todo-add-card">
      <textarea
        className="todo-card__input"
        type="text"
        id="todo-input"
        onChange={handleInputChange}
        value={inputData}
        autoFocus
        onKeyDown={handleKeyDown}
      ></textarea>

      <FormButtons handleAddTask={handleAddTask} isEmptyError={isEmptyError} />
    </div>
  );
};

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputData: PropTypes.string.isRequired,
  isEmptyError: PropTypes.bool.isRequired,
};

export default AddCard;
