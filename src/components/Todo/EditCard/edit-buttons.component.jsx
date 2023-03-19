import React from "react";
import PropTypes from "prop-types";
import deleteButton from "assets/images/delete.png";
import checkButton from "assets/images/check.png";

const EditButtons = ({ handleEditTask, editData, taskID }) => {
  const handleEdit = () => {
    handleEditTask(taskID, editData);
  };
  return (
    <div className="edit-card__btn-section">
      <button className="todo-save__btn" onClick={handleEdit}>
        Save
      </button>
      <button>
        <img src={checkButton} alt="Complete Button" />
      </button>
      <button className="todo-delete__btn">
        <img src={deleteButton} alt="Delete Button" />
      </button>
      {/* {isEmptyError && <p className="error">Title is required</p>} */}
    </div>
  );
};

EditButtons.propTypes = {
  handleEditTask: PropTypes.func.isRequired,
  editData: PropTypes.string.isRequired,
  taskID: PropTypes.string.isRequired,
};

export default EditButtons;
