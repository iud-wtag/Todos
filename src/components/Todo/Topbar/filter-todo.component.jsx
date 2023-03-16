import React from "react";

const FilterTodo = () => {
  return (
    <div className="filter-btn">
      <button className="filter-btn__btn btn">All</button>
      <button className="filter-btn__btn btn">Incomplete</button>
      <button className="filter-btn__btn btn">Complete</button>
    </div>
  );
};

export default FilterTodo;
