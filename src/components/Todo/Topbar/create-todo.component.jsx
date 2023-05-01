import React from "react";
import PropTypes from "prop-types";
import createIcon from "assets/images/create.png";
import { CREATE_ICON } from "common/constants";

const CreateTodo = ({ onCreateClick, isCreateButtonClicked }) => {
  return (
    <div className="todo__top__btn-create">
      <button
        className="todo__top__btn-create__inner-btn btn__bg-purple"
        onClick={onCreateClick}
        disabled={isCreateButtonClicked}
      >
        <img src={createIcon} alt={CREATE_ICON} />
        Create
      </button>
    </div>
  );
};

CreateTodo.propTypes = {
  onCreateClick: PropTypes.func.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default CreateTodo;
