import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ buttonText, handlePaginationClick }) => {
  return (
    <button
      className="todo__pagination-btn"
      onClick={() => handlePaginationClick(buttonText)}
    >
      {buttonText}
    </button>
  );
};

Pagination.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;
