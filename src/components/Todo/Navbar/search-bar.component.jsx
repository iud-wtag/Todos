import React from "react";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";

const SearchBar = () => {
  const toggleSearchInput = () => {
    document.querySelector("#todo-search_input").classList.toggle("active");
  };
  const handleSearchChange = () => {};
  return (
    <div className="todo-search">
      <input
        type="search"
        id="todo-search_input"
        className="todo_search_input"
        onChange={handleSearchChange}
      />
      <img src={searchIcon} alt={SEARCH_ICON} onClick={toggleSearchInput} />
    </div>
  );
};

export default SearchBar;
