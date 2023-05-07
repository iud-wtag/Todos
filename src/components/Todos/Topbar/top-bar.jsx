import React from "react";
import PropTypes from "prop-types";
import FilterTodo from "components/Todos/Topbar/filter-todo.component";
import CreateTodo from "components/Todos/Topbar/create-todo.component";

const TopBar = ({
  onCreate,
  activeFilterType,
  isCreateButtonClicked,
  setActiveFilterType,
}) => {
  return (
    <div className="todo__top">
      <h1 className="todo__top-title">Add Task</h1>
      <div className="todo__top__btn-wrapper">
        <CreateTodo
          onCreate={onCreate}
          isCreateButtonClicked={isCreateButtonClicked}
        />
        <FilterTodo
          activeFilterType={activeFilterType}
          setActiveFilterType={setActiveFilterType}
        />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onCreate: PropTypes.func.isRequired,
  setActiveFilterType: PropTypes.func.isRequired,
  activeFilterType: PropTypes.string.isRequired,
  isCreateButtonClicked: PropTypes.bool.isRequired,
};

export default TopBar;
