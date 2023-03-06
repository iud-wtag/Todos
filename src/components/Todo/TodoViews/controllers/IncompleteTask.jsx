import React from "react";

const IncompleteTask = () => {
  return (
    <div className="todo-crud-btn">
      <button>
        <img src="assets/images/check.png" alt="Complete button" />
      </button>
      <button>
        <img src="assets/images/edit.png" alt="Edit button" />
      </button>
      <button>
        <img src="assets/images/delete.png" alt="Delete button" />
      </button>
    </div>
  );
};

export default IncompleteTask;
