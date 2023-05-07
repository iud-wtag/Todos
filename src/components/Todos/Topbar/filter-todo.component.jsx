import React from "react";
import PropTypes from "prop-types";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";

const FilterTodo = ({ onFilter, activeFilterType }) => {
  const filterButtons = [
    { label: LABEL_FILTER_ALL },
    { label: LABEL_FILTER_COMPLETE },
    { label: LABEL_FILTER_INCOMPLETE },
  ];

  function handleFilter(event) {
    onFilter(event.target.dataset.label);
  }

  return (
    <div className="todo__top__btn-filter">
      {filterButtons.map((button) => (
        <button
          key={button.label}
          className={`todo__top__btn-filter__inner btn__bg-white ${
            activeFilterType === button.label ? "active" : ""
          }`}
          data-label={`${button.label}`}
          onClick={handleFilter}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

FilterTodo.propTypes = {
  onFilter: PropTypes.func.isRequired,
  activeFilterType: PropTypes.string.isRequired,
};

export default FilterTodo;
