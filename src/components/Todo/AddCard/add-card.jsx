import React, { useState } from "react";
import PropTypes from "prop-types";
import AddActionBar from "components/Todo/AddCard/add-action-bar.component";
import { ENTER } from "common/constants";

const AddCard = ({ handleAddTask, isEmptyError, toggleEmptyError }) => {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
    toggleEmptyError(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleAddTask(inputTask);
    }
  };

  return (
    <div className="todo-card todo-add-card">
      <textarea
        className="todo-card__input"
        type="text"
        id="todo-input"
        onChange={handleInputChange}
        value={inputTask}
        autoFocus
        onKeyDown={handleKeyDown}
      ></textarea>

      <AddActionBar
        handleAddTask={handleAddTask}
        inputTask={inputTask}
        isEmptyError={isEmptyError}
      />
    </div>
  );
};

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  isEmptyError: PropTypes.bool.isRequired,
  toggleEmptyError: PropTypes.func.isRequired,
};

export default AddCard;
