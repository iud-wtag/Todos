import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import {
  ALT_COMPLETE_BUTTON,
  ALT_EDIT_BUTTON,
  ALT_DELETE_BUTTON,
} from "common/constants";

const ViewActionBar = ({ onDeleteTask, onCompleteTask, onEditClick, todo }) => {
  const { id, task, date, completeTime, isTaskComplete } = todo;

  return isTaskComplete ? (
    <div className="todo__card-view-btns complete-btns">
      <button onClick={() => onDeleteTask(id)}>
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
      <p className="complete-msg purple-back__btn">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  ) : (
    <div className="todo__card-view-btns incomplete-btns">
      <button onClick={() => onCompleteTask(id, date, task)}>
        <img src={checkButton} alt={ALT_COMPLETE_BUTTON} />
      </button>
      <button onClick={() => onEditClick(id)}>
        <img src={editButton} alt={ALT_EDIT_BUTTON} />
      </button>
      <button onClick={() => onDeleteTask(id)}>
        <img src={deleteButton} alt={ALT_DELETE_BUTTON} />
      </button>
    </div>
  );
};

ViewActionBar.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default ViewActionBar;
