import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCardActionBar from "components/Todo/AddCard/add-card-action-bar.component";
import { ENTER } from "common/constants";

const AddCard = ({ handleAddTask, handleCancelClick }) => {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
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

      <AddCardActionBar
        handleAddTask={handleAddTask}
        handleCancelClick={handleCancelClick}
        inputTask={inputTask}
      />
    </div>
  );
};

AddCard.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};

export default AddCard;
