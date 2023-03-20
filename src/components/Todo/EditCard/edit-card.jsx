import React, { useState } from "react";
import PropTypes from "prop-types";
import EditButtons from "components/Todo/EditCard/edit-buttons.component";
import { ENTER } from "common/constants";

const EditCard = ({
  handleEditTask,
  taskId,
  task,
  handleCompleteTask,
  startDate,
}) => {
  const [editedTask, setEditData] = useState(task);
  const handleChange = (e) => {
    setEditData(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === ENTER) {
      handleEditTask(taskId, editedTask);
    }
  };

  return (
    <div className="todo-card__edit">
      <textarea
        name="todo_input"
        id="todo_input"
        className="todo-card__input"
        autoFocus
        value={editedTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <EditButtons
        handleEditTask={handleEditTask}
        editedTask={editedTask}
        taskId={taskId}
        task={task}
        handleCompleteTask={handleCompleteTask}
        startDate={startDate}
      />
    </div>
  );
};

EditCard.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
};

export default EditCard;
