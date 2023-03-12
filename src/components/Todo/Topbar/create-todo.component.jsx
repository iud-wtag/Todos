import React from "react";
import PropTypes from "prop-types";
import createIcon from "assets/images/create.png";

const CreateTodo = ({ handleCreateClick, isCreateBtnClicked }) => {
  return (
    <div className="create-btn">
      <button
        className="btn"
        onClick={handleCreateClick}
        disabled={isCreateBtnClicked}
      >
        <img src={createIcon} alt="Create icon" />
        Create
      </button>
    </div>
  );
};

CreateTodo.propTypes = {
  handleCreateClick: PropTypes.func.isRequired,
  isCreateBtnClicked: PropTypes.bool.isRequired,
};

export default CreateTodo;
