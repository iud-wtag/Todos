import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCardActionBar from "components/Todo/AddCard/add-card-action-bar.component";
import { KEY_ENTER } from "common/constants";

const AddCard = ({
  onAddTask,
  isEmptyError,
  toggleEmptyError,
  onCancelClick,
}) => {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
    isEmptyError && toggleEmptyError(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === KEY_ENTER) {
      onAddTask(inputTask);
    }
  };

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
        onCancelClick={onCancelClick}
        isEmptyError={isEmptyError}
      />
    </div>
  );
};

AddCard.propTypes = {
  isEmptyError: PropTypes.bool.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  toggleEmptyError: PropTypes.func.isRequired,
};

export default AddCard;
