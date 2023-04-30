import React from "react";
import searchIcon from "assets/images/search.png";
import { SEARCH_ICON } from "common/constants";

const SearchBar = () => {
  return (
    <div className="navbar__right">
      <img src={searchIcon} alt={SEARCH_ICON} />
    </div>
  );
};

export default SearchBar;
