import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  KEY_ENTER,
  LABEL_FILTER_ALL,
  MESSAGE_ADD_TASK,
  MESSAGE_REQUIRED,
  MESSAGE_ERROR,
} from "common/constants";
import {
  showSuccessToast,
  showRequiredToast,
  showErrorToast,
} from "common/notification";
import {
  addTodo,
  filterTodo,
  searchTodo,
  handleCurrentPage,
  handleSearchButton,
} from "actions";
import { sanitizeInput } from "helpers/sanitizeInput";
import AddCardActionBar from "components/Todos/AddCard/add-card-action-bar.component";

const AddCard = ({ onCreate, onActiveFilterType }) => {
  const dispatch = useDispatch();

  const [inputTask, setInputTask] = useState("");

  function handleAddTask(inputTask) {
    const sanitizedTask = sanitizeInput(inputTask);
    if (sanitizedTask.trim() === "") {
      showRequiredToast(MESSAGE_REQUIRED);
      return;
    }
    onCreate();
    handleFilter(LABEL_FILTER_ALL);
    dispatch(searchTodo(""));
    dispatch(addTodo(sanitizedTask));
    dispatch(handleSearchButton(true));
    showSuccessToast(MESSAGE_ADD_TASK);
  }

  function handleFilter(filterType) {
    dispatch(filterTodo(filterType));
    dispatch(handleCurrentPage(1));
    onActiveFilterType(filterType);
  }

  function handleCancelClick() {
    onCreate();
    showErrorToast(MESSAGE_ERROR);
  }

  function handleInputChange(event) {
    setInputTask(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === KEY_ENTER) {
      handleAddTask(inputTask);
    }
  }

  return (
    <div className="todo__card-add">
      <textarea
        className="todo__card-input"
        type="text"
        id="todo-input"
        autoFocus
        value={inputTask}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      <AddCardActionBar
        inputTask={inputTask}
        onAddTask={handleAddTask}
        onCancelClick={handleCancelClick}
      />
    </div>
  );
};

AddCard.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onActiveFilterType: PropTypes.func.isRequired,
};

export default AddCard;
