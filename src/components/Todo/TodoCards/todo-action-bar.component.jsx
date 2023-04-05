import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const TodoActionBar = ({ handleDeleteTask, taskId }) => {
  const handleDelete = () => {
    handleDeleteTask(taskId);
  };
  return isTaskComplete ? (
    <div className="todo-view__btns complete-btns">
      <button onClick={handleDelete}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
      <p className="complete-msg purple-back__btn">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  ) : (
    <div className="todo-view__btns incomplete-btns">
      <button onClick={handleComplete}>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button>
        <img src={editButton} alt={EDIT_BUTTON} />
      </button>
      <button onClick={handleDelete}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

TodoActionBar.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  taskId: PropTypes.string.isRequired,
};

export default TodoActionBar;
