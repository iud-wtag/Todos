import React from "react";
import logo from "assets/images/logo.png";
import { ALT_LOGO } from "common/constants";

const Logo = () => {
  return (
    <div className="todo-logo">
      <div className="todo-logo__img">
        <img src={logo} alt={ALT_LOGO} />
      </div>
      <div className="todo-logo__txt">
        <h3>Todos</h3>
      </div>
    </div>
  );
};

export default Logo;
