import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import EditActionBar from "components/Todo/EditCard/edit-action-bar.component";
import { KEY_ENTER } from "common/constants";

const EditCard = ({ todo, onEditTask, onCompleteTask, onEditCancelTask }) => {
  const { id, task } = todo;
  const textRef = useRef(null);
  const [editedTask, setEditData] = useState(task);

  const handleChange = (e) => {
    setEditData(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === KEY_ENTER) {
      onEditTask(id, editedTask);
    }
  };

  const setFocusAndSelection = () => {
    textRef.current.focus();
    textRef.current.selectionStart = textRef.current.value.length;
    textRef.current.selectionEnd = textRef.current.value.length;
  };

  useEffect(() => {
    setFocusAndSelection();
  }, [task]);

  return (
    <>
      <textarea
        name="todo_input"
        id="todo_input"
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
        onEditCancelTask={onEditCancelTask}
      />
    </>
  );
};

EditCard.propTypes = {
  todo: PropTypes.object.isRequired,
  onEditTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditCancelTask: PropTypes.func.isRequired,
};

export default EditCard;
