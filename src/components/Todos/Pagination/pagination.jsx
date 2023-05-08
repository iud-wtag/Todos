import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrentPage } from "actions";
import { LABEL_LOAD_MORE } from "common/constants";

const Pagination = ({ buttonText }) => {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state) => state.currentPageReducer.currentPage
  );

  function handlePaginationClick() {
    if (buttonText === LABEL_LOAD_MORE) {
      dispatch(handleCurrentPage(currentPage + 1));
    } else {
      dispatch(handleCurrentPage(1));
    }
  }

  return (
    <div className="todo__pagination">
      <button className="todo__pagination-btn" onClick={handlePaginationClick}>
        {buttonText}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Pagination;
