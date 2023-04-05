import React from "react";
import PropTypes from "prop-types";
import FilterTodo from "components/Todo/Topbar/filter-todo.component";
import CreateTodo from "components/Todo/Topbar/create-todo.component";

const TopBar = ({
  handleCreateClick,
  isCreateButtonClicked,
  handleFilterClick,
}) => {
  return (
    <div className="todo-top">
      <h1 className="todo-top__title">Add Task</h1>
      <div className="todo-top__btn-section">
        <CreateTodo
          handleCreateClick={handleCreateClick}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <FilterTodo handleFilterClick={handleFilterClick} />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  handleCreateClick: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default TopBar;
