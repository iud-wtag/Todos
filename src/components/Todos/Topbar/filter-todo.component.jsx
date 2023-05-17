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
import classNames from "classnames";

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
      minHeight: "34px",
      height: "0px",
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
            className={classNames(
              "btn__bg-white",
              "todo__top-btn-filter__inner",
              {
                "todo__top-btn-filter__inner--active":
                  activeFilterType === button.label,
              }
            )}
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
          isSearchable={false}
        />
      </div>
    </>
  );
};

export default FilterTodo;
