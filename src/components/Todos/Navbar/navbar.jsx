import React from "react";
import Logo from "components/Todos/Navbar/logo.component";
import SearchBar from "components/Todos/Navbar/search-bar.component";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__wrapper">
          <Logo />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
