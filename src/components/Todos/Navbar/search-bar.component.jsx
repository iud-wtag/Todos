import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICON_SEARCH, ALT_TEXT_SEARCH_ICON } from "common/constants";
import {
  setLoader,
  searchTodo,
  handleCurrentPage,
  handleSearchButton,
} from "actions";
import { debounce } from "helpers/debounce";
import { sanitizeInput } from "helpers/sanitizeInput";

const SearchBar = () => {
  const dispatch = useDispatch();

  const isSearchButtonClicked = useSelector(
    (state) => state.buttonClickReducers.isSearchButtonClicked
  );

  function handleSearchInput(input) {
    const sanitizedTask = sanitizeInput(input).trim();
    dispatch(searchTodo(sanitizedTask));
    dispatch(handleCurrentPage(1));
  }

  function handleSearchChange(event) {
    dispatch(setLoader(true));
    handleDebounce(event);
  }

  function handleSearch(event) {
    handleSearchInput(event.target.value);
    dispatch(setLoader(false));
  }

  function toggleSearchInput() {
    handleSearchInput("");
    dispatch(setLoader(false));
    dispatch(handleSearchButton(isSearchButtonClicked));
  }

  const handleDebounce = useRef(debounce(handleSearch), []).current;

  return (
    <div className="navbar__right todo-search">
      {isSearchButtonClicked && (
        <input
          type="search"
          id="todo-search-input"
          className="todo-search-input"
          placeholder="Search here..."
          onChange={handleSearchChange}
          autoFocus
        />
      )}
      <img
        src={ICON_SEARCH}
        alt={ALT_TEXT_SEARCH_ICON}
        onClick={toggleSearchInput}
      />
    </div>
  );
};

export default SearchBar;
