import React, { useState } from "react";
import PropTypes from "prop-types";
import EditActionBar from "components/Todo/EditCard/edit-action-bar.component";
import { ENTER } from "common/constants";

const EditCard = ({ todo, handleEditTask, handleCompleteTask }) => {
  const { id, task } = todo;

  const [editedTask, setEditData] = useState(task);
  const handleChange = (e) => {
    setEditData(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleEditTask(id, editedTask);
    }
  };

  return (
    <div className="todo-card__edit">
      <textarea
        name="todo_input"
        id="todo_input"
        className="todo-card__input"
        value={editedTask}
        autoFocus
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
