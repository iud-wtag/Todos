import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { editTodo } from "actions";
import { sanitizeInput } from "helpers/sanitizeInput";
import {
  KEY_ENTER,
  MESSAGE_EDIT_TASK,
  MESSAGE_REQUIRED_TITLE,
} from "common/constants";
import { useDispatch } from "react-redux";
import EditActionBar from "components/Todos/EditCard/edit-action-bar.component";
import { showRequiredToast, showSuccessToast } from "common/notification";

const EditCard = ({ todo, onSetEdit }) => {
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const { id, task } = todo;
  const [editedTask, setEditedTask] = useState(task);

  function handleChange(event) {
    setEditedTask(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === KEY_ENTER) {
      handleEditTask();
    }
  }

  function handleEditTask() {
    const sanitizedTask = sanitizeInput(editedTask);
    if (sanitizedTask.trim() === "") {
      showRequiredToast(MESSAGE_REQUIRED_TITLE);
      return;
    }
    dispatch(editTodo(id, sanitizedTask));
    onSetEdit(false);
    showSuccessToast(MESSAGE_EDIT_TASK);
  }

  function setFocusAndSelection() {
    textRef.current.focus();
    const { length } = textRef.current.value;
    textRef.current.selectionStart = length;
    textRef.current.selectionEnd = length;
  }

  useEffect(() => {
    setFocusAndSelection();
  }, []);

  return (
    <>
      <textarea
        id="todo-input"
        name="todo_input"
        className="todo__card-view__input"
        value={editedTask}
        ref={textRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      <EditActionBar
        todo={todo}
        editedTask={editedTask}
        onSetEdit={onSetEdit}
      />
    </>
  );
};

EditCard.propTypes = {
  todo: PropTypes.object.isRequired,
  onSetEdit: PropTypes.func.isRequired,
};

export default EditCard;
