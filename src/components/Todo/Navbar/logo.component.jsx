import React from "react";
import logo from "assets/images/logo.png";
import { ALT_LOGO } from "common/constants";

const Logo = () => {
  return (
    <div className="navbar__left">
      <div className="navbar__left-img">
        <img src={logo} alt={ALT_LOGO} />
      </div>
      <div className="navbar__left-txt">
        <h3>Todos</h3>
      </div>
    </div>
  );
};

export default Logo;
