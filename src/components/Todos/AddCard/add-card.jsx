import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCardActionBar from "components/Todos/AddCard/add-card-action-bar.component";
import { KEY_ENTER } from "common/constants";

const AddCard = ({ isEmptyError, onAddTask, toggleEmptyError }) => {
  const [inputTask, setInputTask] = useState("");

  function handleInputChange(event) {
    setInputTask(event.target.value);
    if (isEmptyError) {
      toggleEmptyError(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === KEY_ENTER) {
      onAddTask(inputTask);
    }
  }

  return (
    <div className="todo__card-add">
      <textarea
        className="todo__card-input"
        type="text"
        id="todo-input"
        onChange={handleInputChange}
        value={inputTask}
        autoFocus
        onKeyDown={handleKeyDown}
      ></textarea>

      <AddCardActionBar
        inputTask={inputTask}
        onAddTask={onAddTask}
        isEmptyError={isEmptyError}
      />
    </div>
  );
};

AddCard.propTypes = {
  isEmptyError: PropTypes.bool.isRequired,
  onAddTask: PropTypes.func.isRequired,
  toggleEmptyError: PropTypes.func.isRequired,
};

export default AddCard;
