import React from "react";
import { ICON_TASK_LOGO, ALT_TEXT_TASK_LOGO } from "common/constants";

const EmptyViews = () => {
  return (
    <div className="empty__board">
      <div className="empty__board-logo">
        <img src={ICON_TASK_LOGO} alt={ALT_TEXT_TASK_LOGO} />
      </div>
      <h3 className="empty__board-title">
        You didn’t add any task. Please, add one.
      </h3>
    </div>
  );
};

export default EmptyViews;
