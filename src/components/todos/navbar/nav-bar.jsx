import React from "react";
import Logo from "components/todos/navbar/logo";
import SearchBar from "components/todos/navbar/search-bar";

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
