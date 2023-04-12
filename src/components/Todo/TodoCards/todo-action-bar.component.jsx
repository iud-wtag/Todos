import React from "react";
import PropTypes from "prop-types";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const TodoActionBar = ({ handleDeleteTask, handleCompleteTask, todo }) => {
  const { id, date, completeTime, isTaskComplete } = todo;

  return isTaskComplete ? (
    <div className="todo-view__btns complete-btns">
      <button onClick={() => handleDeleteTask(id)}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
      <p className="complete-msg purple-back__btn">
        Completed in {completeTime} {completeTime <= 1 ? "day" : "days"}
      </p>
    </div>
  ) : (
    <div className="todo-view__btns incomplete-btns">
      <button onClick={() => handleCompleteTask(id, date)}>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button>
        <img src={editButton} alt={EDIT_BUTTON} />
      </button>
      <button onClick={() => handleDeleteTask(id)}>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

TodoActionBar.propTypes = {
  handleDeleteTask: PropTypes.func.isRequired,
  handleCompleteTask: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoActionBar;
