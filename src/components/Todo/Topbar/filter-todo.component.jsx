import React from "react";
import PropTypes from "prop-types";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";

const FilterTodo = ({ onFilter }) => {
  function handleFilterAll() {
    onFilter(LABEL_FILTER_ALL);
  }

  function handleFilterComplete() {
    onFilter(LABEL_FILTER_COMPLETE);
  }

  function handleFilterIncomplete() {
    onFilter(LABEL_FILTER_INCOMPLETE);
  }

  return (
    <div className="todo__top__btn-filter">
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={handleFilterAll}
      >
        All
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={handleFilterIncomplete}
      >
        Incomplete
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={handleFilterComplete}
      >
        Complete
      </button>
    </div>
  );
};

FilterTodo.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterTodo;
