import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ buttonText, onPaginationClick }) => {
  function handleClick() {
    onPaginationClick(buttonText);
  }

  return (
    <div className="todo__pagination">
      <button className="todo__pagination-btn" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onPaginationClick: PropTypes.func.isRequired,
};

export default Pagination;
