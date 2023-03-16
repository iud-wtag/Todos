import React from "react";
import Logo from "components/Todo/Navbar/logo.component";
import SearchBar from "components/Todo/Navbar/search-bar.component";

const Navbar = () => {
  return (
    <div className="navbar-back">
      <div className="navbar__container">
        <div className="navbar-back__navbar">
          <Logo />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
