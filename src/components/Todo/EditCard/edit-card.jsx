import React, { useState } from "react";
import PropTypes from "prop-types";
import EditButtons from "components/Todo/EditCard/edit-buttons.component";

const EditCard = ({
  handleEditTask,
  taskID,
  taskData,
  handleCompleteTask,
  startDate,
}) => {
  const [editData, setEditData] = useState(taskData);
  const handleChange = (e) => {
    setEditData(e.target.value);
  };

  return (
    <div className="todo-card__edit">
      <textarea
        name="todo_input"
        id="todo_input"
        className="todo-card__input"
        autoFocus
        value={editData}
        onChange={handleChange}
      ></textarea>
      <EditButtons
        handleEditTask={handleEditTask}
        editData={editData}
        taskID={taskID}
        taskData={taskData}
        handleCompleteTask={handleCompleteTask}
        startDate={startDate}
      />
    </div>
  );
};

EditCard.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
  taskData: PropTypes.string.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  startDate: PropTypes.object.isRequired,
};

export default EditCard;
