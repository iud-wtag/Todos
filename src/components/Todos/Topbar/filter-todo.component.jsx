import React from "react";
import {
  LABEL_FILTER_ALL,
  LABEL_FILTER_COMPLETE,
  LABEL_FILTER_INCOMPLETE,
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
    { label: LABEL_FILTER_ALL },
    { label: LABEL_FILTER_COMPLETE },
    { label: LABEL_FILTER_INCOMPLETE },
  ];

  function handleFilter(event) {
    dispatch(handleCurrentPage(1));
    dispatch(filterTodo(event.target.dataset.label));
  }

  return (
    <div className="todo__top-btn-filter">
      {filterButtons.map((button) => (
        <button
          key={button.label}
          className={classNames(
            "btn__bg--white",
            "todo__top-btn-filter__inner",
            {
              "todo__top-btn-filter__inner--active":
                activeFilterType === button.label,
            }
          )}
          data-label={`${button.label}`}
          onClick={handleFilter}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTodo;
