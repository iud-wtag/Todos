import React from "react";
import { ICON_SEARCH, ALT_TEXT_SEARCH_ICON } from "common/constants";

const SearchBar = () => {
  return (
    <div className="navbar__right">
      <img src={ICON_SEARCH} alt={ALT_TEXT_SEARCH_ICON} />
    </div>
  );
};

export default SearchBar;
