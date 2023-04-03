import React from "react";
import PropTypes from "prop-types";
import { ALL, INCOMPLETE, COMPLETE } from "common/constants";

const FilterTodo = ({ handleFilterClick }) => {
  document.querySelectorAll(".filter-btn__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".active").classList.remove("active");
      btn.classList.add("active");
    });
  });
  return (
    <div className="filter-btn">
      <button
        className="filter-btn__btn btn white-back__btn active"
        onClick={() => handleFilterClick(ALL)}
      >
        All
      </button>
      <button
        className="filter-btn__btn btn white-back__btn"
        onClick={() => handleFilterClick(INCOMPLETE)}
      >
        Incomplete
      </button>
      <button
        className="filter-btn__btn btn white-back__btn"
        onClick={() => handleFilterClick(COMPLETE)}
      >
        Complete
      </button>
    </div>
  );
};

FilterTodo.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterTodo;
