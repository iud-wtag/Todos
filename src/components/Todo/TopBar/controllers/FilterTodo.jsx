import React from "react";

const FilterTodo = (props) => {
  return (
    <div className="filter-btn">
      <button className="btn">All</button>
      <button className="btn">Incomplete</button>
      <button className="btn">Complete</button>
    </div>
  );
};

export default FilterTodo;
