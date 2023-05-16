import React from "react";
import { useSelector } from "react-redux";
import {
  ICON_TASK_LOGO,
  ALT_TEXT_TASK_LOGO,
  TEXT_EMPTY_TASK,
  TEXT_EMPTY_COMPLETE_TASK,
  LABEL_FILTER_COMPLETE,
} from "common/constants";

const EmptyViews = () => {
  const activeFilterType = useSelector(
    (state) => state.filterReducers.filterType
  );

  return (
    <div className="empty__board">
      <div className="empty__board-logo">
        <img src={ICON_TASK_LOGO} alt={ALT_TEXT_TASK_LOGO} />
      </div>
      <h3 className="empty__board-title">
        {activeFilterType === LABEL_FILTER_COMPLETE
          ? TEXT_EMPTY_COMPLETE_TASK
          : TEXT_EMPTY_TASK}
      </h3>
    </div>
  );
};

export default EmptyViews;
