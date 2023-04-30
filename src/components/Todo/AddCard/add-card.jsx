import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCardActionBar from "components/Todo/AddCard/add-card-action-bar.component";
import { KEY_ENTER } from "common/constants";

const AddCard = ({ handleAddTask, handleCancelClick }) => {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === KEY_ENTER) {
      handleAddTask(inputTask);
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
