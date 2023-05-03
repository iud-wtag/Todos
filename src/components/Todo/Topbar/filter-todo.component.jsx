import React from "react";
import PropTypes from "prop-types";
import {
  FILTER_STATE_ALL,
  FILTER_STATE_COMPLETE,
  FILTER_STATE_INCOMPLETE,
} from "common/constants";

const FilterTodo = ({ onFilterClick }) => {
  return (
    <div className="todo__top__btn-filter">
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilterClick(FILTER_STATE_ALL)}
      >
        All
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilterClick(FILTER_STATE_INCOMPLETE)}
      >
        Incomplete
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilterClick(FILTER_STATE_COMPLETE)}
      >
        Complete
      </button>
    </div>
  );
};

FilterTodo.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
};

export default FilterTodo;
