import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import EditActionBar from "components/Todo/EditCard/edit-action-bar.component";
import { KEY_ENTER } from "common/constants";

const EditCard = ({ todo, onEditTask, onCompleteTask, onCancelEditTask }) => {
  const { id, task } = todo;
  const textRef = useRef(null);
  const [editedTask, setEditedTask] = useState(task);

  function handleChange(event) {
    setEditedTask(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === KEY_ENTER) {
      onEditTask(id, editedTask);
    }
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
        name="todo_input"
        id="todo-input"
        className="todo__card-input"
        value={editedTask}
        ref={textRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      <EditActionBar
        todo={todo}
        editedTask={editedTask}
        onEditTask={onEditTask}
        onCompleteTask={onCompleteTask}
        onCancelEditTask={onCancelEditTask}
      />
    </>
  );
};

EditCard.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onCancelEditTask: PropTypes.func.isRequired,
};

export default EditCard;
