import React from "react";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
} from "common/constants";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, handleCurrentPage } from "actions";

const FilterTodo = () => {
  const dispatch = useDispatch();

  const activeFilterType = useSelector(
    (state) => state.filterReducers.filterType
  );

  const filterButtons = [
    { label: LABEL_FILTER_ALL },
    { label: LABEL_FILTER_COMPLETE },
    { label: LABEL_FILTER_INCOMPLETE },
  ];

  function handleFilter(event) {
    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(event.target.dataset.label));
  }

  function handleSelectFilter(event) {
    const label = event.target.value;

    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(label));

    onActiveFilterType(label);
  }

  return (
    <>
      <div className="todo__top__btn-filter">
        {filterButtons.map((button) => (
          <button
            key={button.label}
            className={`todo__top__btn-filter__inner btn__bg-white ${
              activeFilterType === button.label ? "active" : ""
            }`}
            data-label={button.label}
            onClick={handleFilter}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="todo__top__btn-filter-select">
        <select
          name={activeFilterType}
          value={activeFilterType}
          onChange={handleSelectFilter}
          className="todo__top__btn-filter-select__wrapper btn__bg-purple"
        >
          {filterButtons.map((button) => (
            <option
              key={button.label}
              value={button.label}
              data-label={button.label}
              className="todo__top__btn-filter-select__inner btn__bg-white"
            >
              {button.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FilterTodo;
