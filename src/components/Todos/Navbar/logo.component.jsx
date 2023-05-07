import React from "react";
import { ICON_LOGO, ALT_TEXT_LOGO } from "common/constants";

const Logo = () => {
  return (
    <div className="navbar__left">
      <div className="navbar__left-img">
        <img src={ICON_LOGO} alt={ALT_TEXT_LOGO} />
      </div>
      <div className="navbar__left-txt">
        <h3>Todos</h3>
      </div>
    </div>
  );
};

export default Logo;
