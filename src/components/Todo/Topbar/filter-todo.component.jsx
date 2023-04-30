import React from "react";
import PropTypes from "prop-types";
import { ALL, INCOMPLETE, COMPLETE } from "common/constants";

const FilterTodo = ({ handleFilterClick }) => {
  return (
    <div className="todo__top__btn-filter">
      <button
        className="todo__top__btn-create__inner btn__bg-white"
        onClick={() => handleFilterClick(ALL)}
      >
        All
      </button>
      <button
        className="todo__top__btn-create__inner btn__bg-white"
        onClick={() => handleFilterClick(INCOMPLETE)}
      >
        Incomplete
      </button>
      <button
        className="todo__top__btn-create__inner btn__bg-white"
        onClick={() => handleFilterClick(COMPLETE)}
      >
        Complete
      </button>
    </div>
  );
};

FilterTodo.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterTodo;
