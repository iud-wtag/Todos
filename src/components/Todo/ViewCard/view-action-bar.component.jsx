import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import {
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const ViewActionBar = ({ todo, onDeleteTask, onCompleteTask, onEditClick }) => {
  const { id, task, date, completeTime, isTaskComplete } = todo;

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id, date, task);
  }

  function handleEditClick() {
    onEditClick(id);
  }

  return isTaskComplete ? (
    <div className="todo__card-view-btns complete-btns">
      <button onClick={handleDeleteTask}>
        <img src={deleteButton} alt={ALT_TEXT_DELETE_TODO} />
      </button>
      <p className="complete-msg purple-back__btn">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  ) : (
    <div className="todo__card-view-btns incomplete-btns">
      <button onClick={handleCompleteTask}>
        <img src={checkButton} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button onClick={handleEditClick}>
        <img src={editButton} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button onClick={handleDeleteTask}>
        <img src={deleteButton} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onCompleteTask: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default ViewActionBar;
