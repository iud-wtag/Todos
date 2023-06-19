import React from "react";
import PropTypes from "prop-types";
import FilterTodo from "components/Todos/Topbar/filter-todo.component";
import CreateTodo from "components/Todos/Topbar/create-todo.component";

const TopBar = ({ onCreate, isCreateButtonClicked }) => {
  return (
    <div className="todo__top">
      <h1 className="todo__top-title">Add Tasks</h1>
      <div className="todo__top-btn-wrapper">
        <CreateTodo
          onCreate={onCreate}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <FilterTodo />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onCreate: PropTypes.func.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default TopBar;
