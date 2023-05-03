import React from "react";
import PropTypes from "prop-types";
import {
  FILTER_LABEL_ALL,
  FILTER_LABEL_COMPLETE,
  FILTER_LABEL_INCOMPLETE,
} from "common/constants";

const FilterTodo = ({ onFilter }) => {
  return (
    <div className="todo__top__btn-filter">
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(FILTER_LABEL_ALL)}
      >
        All
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(FILTER_LABEL_INCOMPLETE)}
      >
        Incomplete
      </button>
      <button
        className="todo__top__btn-filter__inner btn__bg-white"
        onClick={() => onFilter(FILTER_LABEL_COMPLETE)}
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
