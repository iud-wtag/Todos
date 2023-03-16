import React from "react";
import checkButton from "assets/images/check.png";
import editButton from "assets/images/edit.png";
import deleteButton from "assets/images/delete.png";

const IncompleteTask = () => {
  return (
    <div className="todo-view__btns">
      <button>
        <img src={checkButton} alt="Complete button" />
      </button>
      <button>
        <img src={editButton} alt="Edit button" />
      </button>
      <button>
        <img src={deleteButton} alt="Delete button" />
      </button>
    </div>
  );
};

export default IncompleteTask;
