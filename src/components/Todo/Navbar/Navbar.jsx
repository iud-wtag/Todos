import React from "react";
import Logo from "components/todo/navbar/logo";
import SearchBar from "components/todo/navbar/search-bar";

const Navbar = () => {
  return (
    <div className="navbarBack">
      <div className="container">
        <div className="navbar">
          <Logo />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
