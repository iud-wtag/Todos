import React from "react";

const FilterTodo = () => {
  return (
    <div className="todo__top-btn-filter">
      <button className="todo__top-btn-filter__inner btn__bg--white">
        All
      </button>
      <button className="todo__top-btn-filter__inner btn__bg--white">
        Incomplete
      </button>
      <button className="todo__top-btn-filter__inner btn__bg--white">
        Complete
      </button>
    </div>
  );
};

export default FilterTodo;
