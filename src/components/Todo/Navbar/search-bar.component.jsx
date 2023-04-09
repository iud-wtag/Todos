import React from "react";
import { useSelector, useDispatch } from "react-redux";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";
import { debounce } from "helpers/debounce";
import { setLoader, handleSearchButton } from "actions";

const SearchBar = ({ handleSearchInput }) => {
  const dispatch = useDispatch();

  const isSearchButtonClicked = useSelector(
    (state) => state.handleButtonClick.isSearchButtonClicked
  );

  const toggleSearchInput = () => {
    handleSearchInput("");
    dispatch(setLoader(false));
    dispatch(handleSearchButton(isSearchButtonClicked));
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

export default SearchBar;
