import React from "react";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";
import {
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const TodoActionBar = () => {
  return (
    <div className="todo__card-view-btns">
      <button>
        <img src={checkButton} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button>
        <img src={editButton} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button>
        <img src={deleteButton} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

export default TodoActionBar;
