import React from "react";
import PropTypes from "prop-types";
import createIcon from "assets/images/create.png";
import { CREATE_ICON } from "common/constants";

const CreateTodo = ({ handleCreateClick, isCreateBtnClicked }) => {
  return (
    <div className="create-btn">
      <button
        className="create-btn__btn btn purple-back__btn"
        onClick={handleCreateClick}
        disabled={isCreateBtnClicked}
      >
        <img src={createIcon} alt={CREATE_ICON} />
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
