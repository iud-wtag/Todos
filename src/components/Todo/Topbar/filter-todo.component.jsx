import React from "react";
import PropTypes from "prop-types";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";

const FilterTodo = ({ onFilter }) => {
  return (
    <div className="todo__top__btn-filter">
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(LABEL_FILTER_ALL)}
      >
        All
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(LABEL_FILTER_INCOMPLETE)}
      >
        Incomplete
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(LABEL_FILTER_COMPLETE)}
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
