import React from "react";
import PropTypes from "prop-types";
import {
  ICON_CHECK,
  ICON_EDIT,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const TaskIncomplete = ({ onDeleteTask, onCompleteTask }) => {
  const actionButtons = [
    {
      id: 0,
      imageSource: ICON_CHECK,
      altText: ALT_TEXT_COMPLETE_TODO,
      handleFunction: onCompleteTask,
    },
    {
      id: 1,
      imageSource: ICON_EDIT,
      altText: ALT_TEXT_EDIT_TODO,
    },
    {
      id: 2,
      imageSource: ICON_DELETE,
      altText: ALT_TEXT_DELETE_TODO,
      handleFunction: onDeleteTask,
    },
  ];

  return (
    <div className="todo__card-view-btn">
      {actionButtons.map((button) => {
        return (
          <button onClick={button.handleFunction} key={button.id}>
            <img src={button.imageSource} alt={button.altText} />
          </button>
        );
      })}
    </div>
  );
};

TaskIncomplete.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
};

export default TaskIncomplete;
