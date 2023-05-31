import React from "react";
import PropTypes from "prop-types";
import { ICON_DELETE, ALT_TEXT_DELETE_TODO } from "common/constants";

const TaskComplete = ({ onDeleteTask, completeTime }) => {
  return (
    <div className="todo__card-view-btn complete-btns">
      <button onClick={onDeleteTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
      <p className="complete-msg">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  );
};

TaskComplete.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  completeTime: PropTypes.number.isRequired,
};

export default TaskComplete;
