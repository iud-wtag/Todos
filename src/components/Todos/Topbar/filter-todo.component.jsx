import React from "react";
import PropTypes from "prop-types";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";
import { useDispatch } from "react-redux";
import { filterTodo, handleCurrentPage } from "actions";

const FilterTodo = ({ activeFilterType, onActiveFilterType }) => {
  const dispatch = useDispatch();

  const filterButtons = [
    { label: LABEL_FILTER_ALL },
    { label: LABEL_FILTER_COMPLETE },
    { label: LABEL_FILTER_INCOMPLETE },
  ];

  function handleFilter(event) {
    const { label } = event.target.dataset;
    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(label));
    onActiveFilterType(label);
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
  activeFilterType: PropTypes.string.isRequired,
  onActiveFilterType: PropTypes.func.isRequired,
};

export default FilterTodo;