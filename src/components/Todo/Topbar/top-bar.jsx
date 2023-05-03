import React from "react";
import PropTypes from "prop-types";
import FilterTodo from "components/Todo/Topbar/filter-todo.component";
import CreateTodo from "components/Todo/Topbar/create-todo.component";

const TopBar = ({ onCreateClick, onFilter, isCreateButtonClicked }) => {
  return (
    <div className="todo__top">
      <h1 className="todo__top-title">Add Task</h1>
      <div className="todo__top__btn-wrapper">
        <CreateTodo
          onCreateClick={onCreateClick}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <FilterTodo onFilter={onFilter} />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onCreateClick: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default TopBar;
