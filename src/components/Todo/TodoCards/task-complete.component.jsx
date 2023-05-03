import React from "react";
import PropTypes from "prop-types";
import { ICON_DELETE, ALT_TEXT_DELETE_TODO } from "common/constants";

const TaskComplete = ({ todo, onDeleteTask }) => {
  const { id, completeTime } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className="todo__card-view-btns complete-btns">
      <button onClick={handleDeleteTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
      <p className="complete-msg">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  );
};

TaskComplete.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskComplete;
