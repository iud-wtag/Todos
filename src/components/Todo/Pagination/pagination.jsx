import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ buttonText, handlePaginationClick }) => {
  const handleClick = () => {
    handlePaginationClick(buttonText);
  };
  return (
    <button className="todo__pagination-btn" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

Pagination.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;
