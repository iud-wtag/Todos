import React from "react";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";
import { debounce } from "helpers/debounce";

const SearchBar = ({ handleSearchInput }) => {
  const toggleSearchInput = () => {
    document.querySelector("#todo-search_input").classList.toggle("active");
  };

  const handleSearchChange = (e) => {
    handleDebounce(e);
  };

  const handleSearch = (e) => {
    handleSearchInput(e.target.value);
  };

  const handleDebounce = debounce(handleSearch);

  return (
    <div className="todo-search">
      <input
        type="search"
        id="todo-search_input"
        className="todo_search_input"
        placeholder="Search here..."
        onChange={handleSearchChange}
      />
      <img src={searchIcon} alt={SEARCH_ICON} onClick={toggleSearchInput} />
    </div>
  );
};

export default SearchBar;
