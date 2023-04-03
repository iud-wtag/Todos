import React from "react";

const FilterTodo = () => {
  return (
    <div className="filter-btn">
      <button className="filter-btn__btn btn white-back__btn">All</button>
      <button className="filter-btn__btn btn white-back__btn">
        Incomplete
      </button>
      <button className="filter-btn__btn btn white-back__btn">Complete</button>
    </div>
  );
};

export default FilterTodo;
