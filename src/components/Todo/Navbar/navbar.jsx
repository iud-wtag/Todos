import React from "react";
import PropTypes from "prop-types";
import Logo from "components/Todo/Navbar/logo.component";
import SearchBar from "components/Todo/Navbar/search-bar.component";

const Navbar = ({
  handleSearchChange,
  toggleSearchInput,
  isSearchButtonClicked,
}) => {
  return (
    <div className="navbar-back">
      <div className="navbar__container">
        <div className="navbar-back__navbar">
          <Logo />
          <SearchBar
            handleSearchChange={handleSearchChange}
            toggleSearchInput={toggleSearchInput}
            isSearchButtonClicked={isSearchButtonClicked}
          />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  toggleSearchInput: PropTypes.func.isRequired,
  isSearchButtonClicked: PropTypes.bool.isRequired,
};

export default Navbar;
