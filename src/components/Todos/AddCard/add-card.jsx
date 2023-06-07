import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  KEY_ENTER,
  PLACEHOLDER_INPUT_TASK,
  LABEL_FILTER_ALL,
} from "common/constants";
import { sanitizeInput } from "helpers/sanitizeInput";
import { addTodo, filterTodo, handleCurrentPage } from "actions";
import AddCardActionBar from "components/Todos/AddCard/add-card-action-bar.component";

const AddCard = ({ isEmptyError, onCreate, toggleEmptyError }) => {
  const dispatch = useDispatch();

  const [inputTask, setInputTask] = useState("");

  function handleAddTask(inputTask) {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      toggleEmptyError(true);
      return;
    }
    dispatch(addTodo(sanitizedTask));
    toggleEmptyError(false);
    onCreate();
    handleFilter(LABEL_FILTER_ALL);
  }

  function handleFilter(filterType) {
    dispatch(filterTodo(filterType));
    dispatch(handleCurrentPage(1));
  }

  function handleCancelTask() {
    onCreate();
    toggleEmptyError(false);
  }

  function handleInputChange(event) {
    setInputTask(event.target.value);
    if (isEmptyError) {
      toggleEmptyError(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === KEY_ENTER) {
      handleAddTask(inputTask);
    }
  }

  return (
    <div className="todo__card-add">
      <textarea
        className="todo__card-add__input"
        type="text"
        id="todo-input"
        autoFocus
        value={inputTask}
        placeholder={PLACEHOLDER_INPUT_TASK}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      <AddCardActionBar
        inputTask={inputTask}
        isEmptyError={isEmptyError}
        onAddTask={handleAddTask}
        onCancelTask={handleCancelTask}
      />
    </div>
  );
};

AddCard.propTypes = {
  isEmptyError: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  toggleEmptyError: PropTypes.func.isRequired,
};

export default AddCard;
