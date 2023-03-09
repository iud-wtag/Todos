import React from "react";
import Logo from "components/Todo/Navbar/controllers/Logo";
import SearchBar from "components/Todo/Navbar/controllers/SearchBar";
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
