import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { formatDate } from "helpers/fortmatDate";

const ViewDetails = ({ task, date, isTaskComplete }) => {
  const formattedDate = formatDate(date);

  return (
    <div className="todo__card-view__details">
      <h3
        className={`todo__card-view__details-title ${classNames({
          "task-complete": isTaskComplete,
        })}`}
      >
        {task}
      </h3>
      <p className="todo__card-view__details-time">
        Created At: {formattedDate}
      </p>
    </div>
  );
};

ViewDetails.propTypes = {
  task: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isTaskComplete: PropTypes.bool.isRequired,
};

export default ViewDetails;
