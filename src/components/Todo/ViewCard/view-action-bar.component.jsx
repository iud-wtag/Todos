import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const ViewActionBar = ({
  handleDeleteTask,
  handleCompleteTask,
  handleEditClick,
  todo,
}) => {
  const { id, date, completeTime, isTaskComplete } = todo;
  const handleDelete = () => {
    handleDeleteTask(id);
  };
  const handleComplete = () => {
    handleCompleteTask(id, date);
  };
  const handleEdit = () => {
    handleEditClick(id);
  };
  return isTaskComplete ? (
    <div className="todo-view__btns complete-btns">
      <button onClick={handleDelete}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
      <p className="complete-msg">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  ) : (
    <div className="todo-view__btns incomplete-btns">
      <button onClick={handleComplete}>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button onClick={handleEdit}>
        <img src={editButton} alt={EDIT_BUTTON} />
      </button>
      <button onClick={handleDelete}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

ViewActionBar.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default ViewActionBar;
