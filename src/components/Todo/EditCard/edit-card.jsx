import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import EditActionBar from "components/Todo/EditCard/edit-action-bar.component";
import { ENTER } from "common/constants";

const EditCard = ({ todo, handleEditTask, handleCompleteTask }) => {
  const { id, task } = todo;
  const textRef = useRef(null);
  const [editedTask, setEditData] = useState(task);

  const handleChange = (e) => {
    setEditData(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleEditTask(id, editedTask);
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
    <div className="todo-card__edit">
      <textarea
        name="todo_input"
        id="todo_input"
        className="todo-card__input"
        value={editedTask}
        ref={textRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>

      <EditActionBar
        todo={todo}
        editedTask={editedTask}
        handleEditTask={handleEditTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
};

EditCard.propTypes = {
  todo: PropTypes.object.isRequired,
  handleEditTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
};

export default EditCard;
