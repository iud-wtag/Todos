import React from "react";
import logo from "assets/images/logo.png";

const Logo = () => {
  return (
    <div className="todo-logo">
      <div className="logo-img">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo-txt">
        <h3>Todos</h3>
      </div>
    </div>
  );
};

export default Logo;
