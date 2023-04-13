import React from "react";
import PropTypes from "prop-types";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";

const SearchBar = ({
  handleSearchChange,
  toggleSearchInput,
  isSearchButtonClicked,
}) => {
  return (
    <div className="todo-search">
      {isSearchButtonClicked && (
        <input
          type="search"
          id="todo-search_input"
          className="todo-search_input"
          placeholder="Search here..."
          onChange={handleSearchChange}
          autoFocus
        />
      )}
      <img src={searchIcon} alt={SEARCH_ICON} onClick={toggleSearchInput} />
    </div>
  );
};

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  toggleSearchInput: PropTypes.func.isRequired,
  isSearchButtonClicked: PropTypes.bool.isRequired,
};

export default SearchBar;
