import React from "react";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";

const SearchBar = () => {
  return (
    <>
      <img src={searchIcon} alt={SEARCH_ICON} />
    </>
  );
};

export default SearchBar;
