import React from "react";
import PropTypes from "prop-types";
import { ICON_CREATE, ALT_TEXT_CREATE_ICON } from "common/constants";

const CreateTodo = ({ onCreate, isCreateButtonClicked }) => {
  return (
    <div className="todo__top__btn-create">
      <button
        className="todo__top__btn-create__inner-btn btn__bg-purple"
        onClick={onCreate}
        disabled={isCreateButtonClicked}
      >
        <img src={ICON_CREATE} alt={ALT_TEXT_CREATE_ICON} />
        Create
      </button>
    </div>
  );
};

CreateTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default CreateTodo;
