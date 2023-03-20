import React from "react";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import { COMPLETE_BUTTON, EDIT_BUTTON, DELETE_BUTTON } from "common/constants";

const IncompleteTask = () => {
  return (
    <div className="todo-view__btns">
      <button>
        <img src={checkButton} alt={COMPLETE_BUTTON} />
      </button>
      <button>
        <img src={editButton} alt={EDIT_BUTTON} />
      </button>
      <button>
        <img src={deleteButton} alt={DELETE_BUTTON} />
      </button>
    </div>
  );
};

export default IncompleteTask;
