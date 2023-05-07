import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "actions";
import {
  ICON_CHECK,
  ICON_EDIT,
  ICON_DELETE,
  ALT_TEXT_COMPLETE_TODO,
  ALT_TEXT_EDIT_TODO,
  ALT_TEXT_DELETE_TODO,
} from "common/constants";

const ViewActionBar = ({ todo }) => {
  const dispatch = useDispatch();

  function handleDeleteTask() {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <div className="todo__card-view-btns">
      <button>
        <img src={ICON_CHECK} alt={ALT_TEXT_COMPLETE_TODO} />
      </button>
      <button>
        <img src={ICON_EDIT} alt={ALT_TEXT_EDIT_TODO} />
      </button>
      <button onClick={handleDeleteTask}>
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_TODO} />
      </button>
    </div>
  );
};

ViewActionBar.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default ViewActionBar;
