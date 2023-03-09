import React from "react";
import PropTypes from "prop-types";
import FilterTodo from "components/todos/topBar/filter-todo";
import CreateTodo from "components/todos/topBar/create-todo";

const TopBar = ({ handleCreateClick, isCreateBtnClicked }) => {
  return (
    <>
      <h1 className="addTask-header">Add Task</h1>
      <div className="btn-section">
        <CreateTodo
          handleCreateClick={handleCreateClick}
          isCreateBtnClicked={isCreateBtnClicked}
        />
        <FilterTodo />
      </div>
    </>
  );
};

TopBar.propTypes = {
  handleCreateClick: PropTypes.func.isRequired,
  isCreateBtnClicked: PropTypes.bool.isRequired,
};

export default TopBar;