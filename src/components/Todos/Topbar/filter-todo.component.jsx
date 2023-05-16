import React from "react";
import Select from "react-select";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ROYAL_BLUE,
} from "common/constants";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, handleCurrentPage } from "actions";

const FilterTodo = () => {
  const dispatch = useDispatch();

  const activeFilterType = useSelector(
    (state) => state.filterReducers.filterType
  );

  const filterButtons = [
    { value: LABEL_FILTER_ALL, label: LABEL_FILTER_ALL },
    { value: LABEL_FILTER_COMPLETE, label: LABEL_FILTER_COMPLETE },
    { value: LABEL_FILTER_INCOMPLETE, label: LABEL_FILTER_INCOMPLETE },
  ];

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? COLOR_WHITE : COLOR_BLACK,
      backgroundColor: state.isSelected ? COLOR_ROYAL_BLUE : COLOR_WHITE,
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: COLOR_ROYAL_BLUE,
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: COLOR_WHITE }),
  };

  function handleFilter(event) {
    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(event.target.dataset.label));
  }

  function handleSelectFilter(event) {
    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(event.value));
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
        <Select
          value={{ label: activeFilterType, value: activeFilterType }}
          onChange={handleSelectFilter}
          options={filterButtons}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default FilterTodo;
