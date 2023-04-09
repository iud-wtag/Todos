import React from "react";
import { useDispatch } from "react-redux";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";
import { debounce } from "helpers/debounce";
import { setLoader } from "actions";

const SearchBar = ({ handleSearchInput }) => {
  const dispatch = useDispatch();

  const toggleSearchInput = () => {
    document.querySelector("#todo-search_input").classList.toggle("active");
  };

  const handleSearchChange = (e) => {
    dispatch(setLoader(true));
    handleDebounce(e);
  };

  const handleSearch = (e) => {
    handleSearchInput(e.target.value);
    dispatch(setLoader(false));
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
